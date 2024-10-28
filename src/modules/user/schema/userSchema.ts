import * as z from "zod";
import { userDetailSchema } from "./userDetailSchema";
export const userSchema = z.object({
  users: z.array(userDetailSchema),
});
export type Users = z.infer<typeof userSchema>;
