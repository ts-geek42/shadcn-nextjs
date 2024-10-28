import React from "react";
import UserForm from "./UserForm";
import { GetUsers } from "@api/user-crud";

const Users = async () => {
  const users = await GetUsers();

  return (
    <div className=" h-full	 flex flex-col gap-10 items-center justify-center">
      <UserForm />
      <div className="flex h-full overflow-auto flex-col gap-2 p-10">
        {users?.map((user: any, index: number) => (
          <div className="border border-gray-500 p-4 rounded-sm " key={index}>
            <div>
              <span>UserName</span>
              <span>:</span>
              <span>{user?.name}</span>
            </div>
            <div>
              <span>UserEmail</span>
              <span>:</span>
              <span>{user?.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
