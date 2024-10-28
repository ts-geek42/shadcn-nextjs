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

export async function GET() {
  return NextResponse.json(todos);
}
