"use client";

import { useState, useEffect } from "react";
import { initChatWidget } from "../utils/chat/init";
import { cleanupWidget } from "../utils/chat/cleanup";

export const useChatWidget = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      try {
        await initChatWidget();
        if (mounted) {
          setIsLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError("Failed to load chat widget");
          setIsLoading(false);
        }
      }
    };

    initialize();

    return () => {
      mounted = false;
      cleanupWidget();
    };
  }, []);

  return { isLoading, error };
};
