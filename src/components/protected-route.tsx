import { useAppSelector } from "@/store/redux-hook";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);

  // if (!isAuthenticated) {
  //   router.push("/login");
  //   return null;
  // }

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");

    if (!loginStatus) {
      router.push("/login");
    }
  }, []);

  return <div>{children}</div>;
};

export default ProtectedRoute;
