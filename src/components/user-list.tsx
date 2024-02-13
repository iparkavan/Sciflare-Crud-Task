import { User } from "@/types/user-types";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import UserModal from "./user-modal";
import { useDeleteUserById } from "@/hooks/user-hooks";

interface userListprops {
  user: User;
}

const UserList: React.FC<userListprops> = ({ user }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userId, setUserId] = useState<string | undefined>("");
  const { mutate: deleteMutate } = useDeleteUserById(userId);

  const deleteHandler = (userId: string | undefined) => {
    deleteMutate(userId);
  };

  return (
    <tr
      key={user._id}
      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 transition-all duration-300"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.fullname}
      </th>
      <td className="px-6 py-4">{user.username}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.age}</td>
      <td className="px-6 py-4 flex items-center justify-start gap-6">
        <div
          className="hover:bg-blue-100 p-1 hover:rounded-full active:rounded-full active:bg-blue-200 transition-all duration-300 active:drop-shadow-md cursor-pointer"
          onClick={() => {
            setIsEditModalOpen(true);
          }}
        >
          <MdModeEdit size={24} color="blue" />
        </div>
        <div
          className="hover:bg-red-100 p-1 hover:rounded-full active:rounded-full active:bg-red-200 transition-all duration-300 active:drop-shadow-md cursor-pointer"
          onClick={() => {
            deleteHandler(user._id);
          }}
        >
          <MdDeleteForever size={24} color="red" />
        </div>
      </td>
      <div className="fixed left-0 right-0 z-30">
        {isEditModalOpen && (
          <UserModal
            onClose={() => setIsEditModalOpen(false)}
            type="Edit"
            user={user}
            heading="Edit User"
          />
        )}
      </div>
    </tr>
  );
};

export default UserList;
