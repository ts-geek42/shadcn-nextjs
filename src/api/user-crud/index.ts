"use server";

import { revalidatePath } from "next/cache";

const users: any = [];

export async function AddUsers(formData: any) {
  const userName = formData.get("name");
  const userEmail = formData.get("email");
  const user = {
    name: userName,
    email: userEmail,
  };
  users.push(user);
  revalidatePath("/server-form");
}

export async function GetUsers() {
  return users;
}
