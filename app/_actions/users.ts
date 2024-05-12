"use server";

import { UserSchema, UserSchemaType } from "@/schema/users";
import prisma from "@/lib/prisma";

export const SaveUser = async (data: UserSchemaType) => {
  const parsedBody = UserSchema.safeParse(data);
  if (!parsedBody.success) {
    throw new Error("bad request");
  }
  const { email, first_name, last_name, gender, date_of_birth } =
    parsedBody.data;
  return await prisma.user.create({
    data: {
      email,
      first_name,
      last_name,
      gender,
      date_of_birth,
    },
  });
};
