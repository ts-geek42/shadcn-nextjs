import { GetUsers } from "@api/user-crud";

const UserList = async () => {
  const users = await GetUsers();
  return (
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
  );
};

export default UserList;
