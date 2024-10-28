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

export async function PUT(request: Request) {
  const { id, completed }: { id: number; completed: boolean } =
    await request.json();
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = completed;
    return NextResponse.json(todo);
  }
  return NextResponse.json({ error: "To-do not found" }, { status: 404 });
}
