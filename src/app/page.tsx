"use client";

import MainPage from "@/components/main-page";
import ProtectedRoute from "@/components/protected-route";

export default function Home() {
  return (
    <ProtectedRoute>
      <main className="flex h-screen flex-col items-center justify-between md:p-24 pt-12">
        <MainPage />
      </main>
    </ProtectedRoute>
  );
}
