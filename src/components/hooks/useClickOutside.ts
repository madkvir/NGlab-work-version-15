"use client";
import { RefObject, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  refs: RefObject<T>[],
  handler: () => void,
  isActive = true
) => {
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (refs.every((ref) => ref.current && !ref.current.contains(event.target as Node))) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler, isActive]);
};
