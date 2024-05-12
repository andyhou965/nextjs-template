import { z } from "zod";

export const UserSchema = z.object({
  email: z.string({ required_error: "Email address is required" }).email(),
  first_name: z
    .string({ required_error: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters" })
    .max(20),
  last_name: z.string().optional(),
  gender: z.enum(["male", "female", "other"]),
  // z.coerce.date() will convert string to date.
  // But z.date() will only accept date
  date_of_birth: z.coerce.date(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
