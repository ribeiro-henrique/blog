import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function fetchPosts(req, res) {
  const posts = await prisma.post.findMany();

  res.status(200).json({ message: "ok", posts });
}
