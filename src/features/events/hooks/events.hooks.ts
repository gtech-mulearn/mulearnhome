"use client";

import { useEffect, useState } from "react";
import { getApiResponseError } from "@/shared";
import {
  fetchFeaturedEvents,
  fetchGrabYourSuperpowers,
  fetchInspirationStation,
  fetchOfficeHours,
  fetchPublicEvents,
  fetchSaltMangoTree,
} from "../api/events.api";
import type {
  GrabYourSuperpowersSession,
  OfficeHoursSession,
  PublicEvent,
  PublicEventsParams,
  WeeklyTwitchEpisode,
  WeeklyTwitchPagination,
  WeeklyTwitchParams,
} from "../types/events.types";

interface WeeklyTwitchResult<T> {
  data: T[];
  pagination: WeeklyTwitchPagination | null;
  error: string | null;
  isLoading: boolean;
}

function useWeeklyTwitchFetch<T, P>(
  fetcher: (params: P) => Promise<{ data: T[]; pagination: WeeklyTwitchPagination }>,
  params: P,
): WeeklyTwitchResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [pagination, setPagination] = useState<WeeklyTwitchPagination | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCurrent = true;
    setIsLoading(true);
    setError(null);

    fetcher(params)
      .then(({ data: items, pagination: p }) => {
        if (!isCurrent) return;
        setData(items);
        setPagination(p);
      })
      .catch((err) => {
        if (!isCurrent) return;
        setData([]);
        setPagination(null);
        setError(getApiResponseError(err));
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [fetcher, JSON.stringify(params)]);

  return { data, pagination, error, isLoading };
}

export function useOfficeHours(params: WeeklyTwitchParams): WeeklyTwitchResult<OfficeHoursSession> {
  return useWeeklyTwitchFetch(fetchOfficeHours, params);
}

export function useSaltMangoTree(
  params: WeeklyTwitchParams,
): WeeklyTwitchResult<WeeklyTwitchEpisode> {
  return useWeeklyTwitchFetch(fetchSaltMangoTree, params);
}

export function useInspirationStation(
  params: WeeklyTwitchParams,
): WeeklyTwitchResult<WeeklyTwitchEpisode> {
  return useWeeklyTwitchFetch(fetchInspirationStation, params);
}

export function useGrabYourSuperpowers(
  params: WeeklyTwitchParams,
): WeeklyTwitchResult<GrabYourSuperpowersSession> {
  return useWeeklyTwitchFetch(fetchGrabYourSuperpowers, params);
}

export function usePublicEvents(params: PublicEventsParams): WeeklyTwitchResult<PublicEvent> {
  return useWeeklyTwitchFetch(fetchPublicEvents, params);
}

export function useFeaturedEvents(params: PublicEventsParams): WeeklyTwitchResult<PublicEvent> {
  return useWeeklyTwitchFetch(fetchFeaturedEvents, params);
}
