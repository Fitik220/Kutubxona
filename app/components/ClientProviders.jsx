"use client";

import { AppPreferencesProvider } from "./AppPreferencesProvider";

export default function ClientProviders({ children }) {
  return (
    <AppPreferencesProvider>
      {children}
    </AppPreferencesProvider>
  );
}