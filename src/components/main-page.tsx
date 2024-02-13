"use client";

import React, { useState } from "react";
import UserList from "./user-table";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import UserModal from "./user-modal";
import { useGetUsers } from "@/hooks/user-hooks";
import UserTable from "./user-table";

const MainPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  const { data: userData, isLoading } = useGetUsers();

  return (
    <>
      {isLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <div className="w-full items-center justify-center mt-12">
          <UserTable userData={userData} />
          <div className="fixed right-3 bottom-3 md:right-12 md:bottom-12">
            <Button
              type="button"
              className="px-6 py-4 bg-blue-500 rounded-full"
              onClick={() => setIsAddModalOpen(true)}
            >
              +
            </Button>
          </div>
          <div className="mt-32">
            {isAddModalOpen && (
              <UserModal
                onClose={() => setIsAddModalOpen(false)}
                type="Add"
                heading="Add User"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
