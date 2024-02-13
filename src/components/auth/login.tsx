"use client";

import React, { FormEvent, useState } from "react";
import Button from "../UI/Button";
import { useGetUsers } from "@/hooks/user-hooks";
import { User } from "@/types/user-types";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/redux-hook";
import { setUserInfo } from "@/store/userSlice";
import { login } from "@/store/action.type";

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { data: allUsers } = useGetUsers();

  // allUsers.fin

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    const user: User = allUsers?.find((u: User) => u.email === email);
    if (!user) {
      console.log("User not found");
      setError("User not found");
      return;
    }
    if (user?.password !== password) {
      setError("Incorrect password");
      return;
    }

    dispatch(
      setUserInfo({
        _id: user?._id,
        fullname: user?.fullname,
        email: user?.email,
        password: user?.password,
        username: user?.username,
        age: user?.age,
        status: "LOGIN",
      })
    );

    setEmail("");
    setPassword("");
    setError("");

    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <div className="min-w-[30%] bg-white rounded-xl px-12 py-6 my-[100px]">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="font-semibold text-3xl">Login to your account</h2>
        {error && <p className="text-red-500 pt-3">{error}</p>}
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
        <div className="flex items-center justify-end mt-6">
          <Button className="bg-blue-500 p-2 rounded-lg" type="submit">
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
