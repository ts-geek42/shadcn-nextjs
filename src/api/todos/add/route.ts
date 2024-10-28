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

export async function POST(request: Request) {
  try {
    const { text }: { text: string } = await request.json();
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    todos.push(newTodo);
    return NextResponse.json(newTodo);
  } catch (error) {
    console.log(error, "error");
    return error;
  }
}
