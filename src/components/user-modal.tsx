import React, { useState } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { useAddUser, useGetUsersById, useUpdateUser } from "@/hooks/user-hooks";
import { User } from "@/types/user-types";

interface userModalProps {
  onClose: () => void;
  user?: User;
  heading: string;
  type: "Add" | "Edit";
}

const UserModal: React.FC<userModalProps> = ({
  onClose,
  user,
  type,
  heading,
}) => {
  const [username, setUsername] = useState<string | undefined>(
    user?.username || ""
  );
  const [fullname, setFullname] = useState<string | undefined>(
    user?.fullname || ""
  );
  const [email, setEmail] = useState<string | undefined>(user?.email || "");
  const [password, setPassword] = useState<string | undefined>(
    user?.password || ""
  );
  const [age, setAge] = useState<string | undefined>(user?.age || "");

  const { mutate: addUserMutate, isPending: isAddPending } = useAddUser();

  const { mutate: updateUserMutate, isPending: isEditPending } = useUpdateUser(
    user?._id
  );

  const isLoading = isAddPending || isEditPending;

  const userSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "Add") {
      addUserMutate({
        username,
        fullname,
        email,
        password,
        age,
      });
    } else if (type === "Edit") {
      updateUserMutate({
        username,
        fullname,
        email,
        password,
        age,
      });
    }

    onClose();
  };

  return (
    <Modal heading={heading} onClose={onClose}>
      <form action="" onSubmit={userSubmitHandler}>
        <div className="flex items-center justify-start p-4">
          <div className="grid items-start justify-center gap-3">
            <div className="flex items-start justify-between gap-2">
              <label className="text-blue-500 font-semibold">Full Name:</label>
              <input
                name="fullname"
                className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
                type="text"
                value={fullname}
                required
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="flex items-start justify-between gap-2">
              <label className="text-blue-500 font-semibold">Username:</label>
              <input
                name="username"
                className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
                type="text"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex  items-start justify-between gap-2">
              <label className="text-blue-500 font-semibold">Email:</label>
              <input
                name="Email"
                className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex  items-start justify-between gap-2">
              <label className="text-blue-500 font-semibold">Password:</label>
              <input
                name="Password"
                className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-start justify-between gap-2">
              <label className="text-blue-500 font-semibold">Age:</label>
              <input
                name="Age"
                className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
                type="number"
                value={age}
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button className="bg-blue-500 p-2 rounded-lg" type="submit">
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default UserModal;
function updateUserMutate(arg0: {
  username: string | undefined;
  fullname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  age: string | undefined;
}) {
  throw new Error("Function not implemented.");
}
function addUserMutate(arg0: {
  username: string | undefined;
  fullname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  age: string | undefined;
}) {
  throw new Error("Function not implemented.");
}
