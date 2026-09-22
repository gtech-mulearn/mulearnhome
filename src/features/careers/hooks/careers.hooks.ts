"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Pagination } from "@/shared";
import { fetchOngoingHiringPage, fetchPreviousHiringPage } from "../api/careers.api";

interface HiringPageResult<T> {
  data: T[];
  count: number;
  page: number;
  isLoading: boolean;
  error: boolean;
  failedPage: number | null;
  goToPage: (page: number) => void;
}

function useHiringPage<T>(
  fetcher: (
    pageIndex: number,
    perPage: number,
  ) => Promise<{ data: T[]; pagination: Pagination | null }>,
  perPage: number,
): HiringPageResult<T> {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<T[]>([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [failedPage, setFailedPage] = useState<number | null>(null);
  const requestId = useRef(0);

  const goToPage = useCallback(
    (nextPage: number) => {
      const id = ++requestId.current;
      setIsLoading(true);

      fetcher(nextPage, perPage)
        .then(({ data: items, pagination }) => {
          if (id !== requestId.current) return;
          setData(items);
          // `pagination` is null for the ongoing-hiring endpoint (backend never sends one) —
          // fall back to the returned page's item count instead of assuming a total exists.
          setCount(pagination?.count ?? items.length);
          setPage(nextPage);
          setError(false);
          setFailedPage(null);
        })
        .catch((err) => {
          if (id !== requestId.current) return;
          console.error("Failed to load hiring page:", err);
          setFailedPage(nextPage);
          setData((prev) => {
            if (prev.length === 0) {
              setError(true);
              setCount(0);
            }
            return prev;
          });
        })
        .finally(() => {
          if (id === requestId.current) setIsLoading(false);
        });
    },
    [fetcher, perPage],
  );

  useEffect(() => {
    goToPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, count, page, isLoading, error, failedPage, goToPage };
}

export function useOngoingHiring(perPage: number) {
  return useHiringPage(fetchOngoingHiringPage, perPage);
}

export function usePreviousHiring(perPage: number) {
  return useHiringPage(fetchPreviousHiringPage, perPage);
}
