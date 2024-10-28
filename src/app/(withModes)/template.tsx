"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Template: React.FC<any> = ({ children }) => {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const path = pathname?.substring(1);
  const nextPage = path === "accordion" ? "button" : "accordion";
  return (
    <div className={`h-full `}>
      <div className="flex items-center justify-between p-6">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="capitalize">{`Show ${nextPage}`}</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Ready For Page Change!!</AlertDialogTitle>
              <AlertDialogDescription>
                {`Are you ready for go to ${nextPage} page ?`}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>No</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  onClick={() => {
                    router.push(`./${nextPage}`);
                  }}
                >
                  Yes
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Switch
          onCheckedChange={(checked: boolean) =>
            setTheme(checked ? "light" : "dark")
          }
        />
      </div>

      {children}
    </div>
  );
};

export default Template;
