import { User } from "@/types/user-types";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import UserModal from "./user-modal";
import { useDeleteUserById, useGetUsersById } from "@/hooks/user-hooks";
import UserList from "./user-list";

interface userListProps {
  userData: User[];
}

const UserTable: React.FC<userListProps> = ({ userData }) => {
  return (
    <div className="relative overflow-x-auto mx-auto shadow-md sm:rounded-lg mt-6 w-[90%] md:w-[70%]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user) => (
            <UserList user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
