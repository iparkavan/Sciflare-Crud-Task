import Login from "@/components/auth/login";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />
    </div>
  );
};

export default page;
