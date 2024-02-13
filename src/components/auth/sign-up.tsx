"use client";

import { useAddUser } from "@/hooks/user-hooks";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Button from "../UI/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { mutate: addUserMutate, isPending: isAddPending } = useAddUser();

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();

    addUserMutate({
      username: undefined,
      fullname: undefined,
      email,
      password,
      age: undefined,
    });

    setEmail("");
    setPassword("");

    // localStorage.setItem(pu"isLoggedIn", "true");
    router.push("/login");
  };

  return (
    <div className="min-w-[30%] bg-white rounded-xl px-12 py-6 my-[100px]">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="font-semibold text-3xl">Create a new account</h2>
        {/* {error && <p className="text-red-500 pt-3">{error}</p>} */}
      </div>

      <form action="" onSubmit={loginHandler}>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-2 mt-6">
            <label className="text-blue-500 font-semibold">Email :</label>
            <input
              name="email"
              className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-2 mt-6">
            <label className="text-blue-500 font-semibold">Password :</label>
            <input
              name="Password"
              className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-end mt-6 gap-5">
          <Button className="bg-blue-500 p-2 rounded-lg" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
