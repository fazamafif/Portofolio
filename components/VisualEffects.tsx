"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic imports with { ssr: false } inside Client Component to comply with Next.js rules
const SplashScreen = dynamic(() => import("@/components/SplashScreen"), {
  ssr: false,
});

const LegoBricks = dynamic(() => import("@/components/LegoBricks"), {
  ssr: false,
});

export default function VisualEffects() {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    // Defer complex 3D Lego background decorations until initial paint & hydration is completed
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const handle = (window as unknown as { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(() => {
        setIsIdle(true);
      });
      return () => {
        if ("cancelIdleCallback" in window) {
          (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
        }
      };
    } else {
      const timer = setTimeout(() => setIsIdle(true), 150);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <SplashScreen />
      {isIdle && <LegoBricks />}
    </>
  );
}
