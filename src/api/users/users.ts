"use server";

let users: any = [];

export async function AddUsers(data: any) {
  console.log(data, "bbb");
  users = data;
  return users;
}
export async function GetUsers() {
  console.log(users, "?>?>?>?");
  return users;
}
