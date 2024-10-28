import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center border border-gray-100 gap-2">
      <Button variant={"default"}>default</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"theme"}>theme</Button>
    </div>
  );
};

export default page;
