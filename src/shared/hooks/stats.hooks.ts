"use client";

import { useEffect, useRef, useState } from "react";
import type { Counts } from "../types/stats.types";

export function useLandingStats() {
  const [counts, setCounts] = useState<Counts | null>(null);
  const [hasError, setHasError] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!socketRef.current) {
      try {
        const socket = new WebSocket("wss://mulearn.org/ws/v1/public/landing-stats/");
        socketRef.current = socket;

        const handleMessage = (event: MessageEvent) => {
          try {
            setCounts(JSON.parse(event.data) as Counts);
          } catch (e) {
            console.error("Failed to parse WebSocket message:", e);
            setHasError(true);
          }
        };

        const handleError = (event: Event) => {
          console.error("WebSocket error:", event);
          setHasError(true);
        };

        socket.addEventListener("message", handleMessage);
        socket.addEventListener("error", handleError);

        return () => {
          socket.removeEventListener("message", handleMessage);
          socket.removeEventListener("error", handleError);
          socket.close();
          socketRef.current = null;
        };
      } catch (error) {
        console.error("Failed to initialize WebSocket:", error);
        setHasError(true);
      }
    }
  }, []);

  return { counts, hasError };
}
