"use server";

import { NextResponse } from "next/server";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let todos: Todo[] = [
  { id: 1, text: "Learn Next.js Server Actions", completed: false },
  { id: 2, text: "Build a full-stack app", completed: false },
];

export async function DELETE(request: Request) {
  const { id }: { id: number } = await request.json();
  todos = todos.filter((todo) => todo.id !== id);
  return NextResponse.json({ message: "To-do deleted" });
}
