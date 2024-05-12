import prisma from "@/lib/prisma";

// The API, used for fetch data, URL->/api/users
export async function GET() {
  const users = await prisma.user.findMany({
    where: {},
  });
  return Response.json(users);
}
