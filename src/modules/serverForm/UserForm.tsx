import { AddUsers } from "@api/user-crud";

const UserForm = ({}: any) => (
  <div>
    <form action={AddUsers}>
      <div className=" p-10 flex flex-col gap-4 bg-black">
        <h1 className="text-black font-bold	text-xl text-center">Users</h1>
        <div className="flex gap-2 items-center justify-between">
          <label>Name</label>
          <span>:</span>
          <input name="name" className="border border-y-neutral-400" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label>Email</label>
          <span>:</span>
          <input name="email" className="border border-y-neutral-400" />
        </div>
        <button
          type="submit"
          className="border !bg-green-800 w-fit p-2 rounded-xl	"
        >
          Add User
        </button>
      </div>
    </form>
  </div>
);

export default UserForm;
