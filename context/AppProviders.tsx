"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
