import SignUp from "@/components/auth/sign-up";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignUp />
    </div>
  );
};

export default page;
