import * as z from "zod";

export const userDetailSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string(),
});

export type UserDetails = z.infer<typeof userDetailSchema>;
