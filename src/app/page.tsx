"use client";

import Login from "@/components/auth/login";
import MainPage from "@/components/main-page";
import Navbar from "@/components/navbar";
import ProtectedRoute from "@/components/protected-route";
import { AuthProvider, useAuthProvider } from "@/context/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {


  return (
    <ProtectedRoute>
      <main className="flex h-screen flex-col items-center justify-between md:p-24 pt-12">
        <MainPage />
      </main>
    </ProtectedRoute>
  );
}
