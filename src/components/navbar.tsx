"use client";

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { useAppDispatch } from "@/store/redux-hook";
import { setUserInfo } from "@/store/userSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(setUserInfo("LOGOUT"));
    // localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex items-center m-4 justify-between">
      <div className="flex items-center gap-3 justify-center">
        <div className="bg-black w-12 h-12 rounded-full" />
        {/* <h2 className="sm:text-2xl text-xl sm:font-semibold">Shopping Cart</h2> */}
        <h2 className="blueGradient text-3xl">Sciflare CRUD</h2>
        <div>
          <IoMdMenu className="md:w-8 md:h-8 w-6 h-6" />
        </div>
      </div>
      {(isLoggedIn || true) && (
        <div className="md:block hidden">
          <div className="flex items-center justify-between gap-12">
            {/* <BsPerson className="w-6 h-6" /> */}

            <button
              className="px-4 py-2 bg-red-500 rounded-xl text-white drop-shadow-md active:drop-shadow-xl active:ring-2 ring-red-500 ring-offset-1"
              onClick={logoutHandler}
            >
              Log Out
            </button>
          </div>
        </div>
      )}
      <div className="md:hidden xs:block">
        <div onClick={logoutHandler}>
          <MdLogout />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
