import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function DeletePost(req, res) {
  const { id } = req.query;

  const deletePost = await prisma.post.delete({
    where: { id: parseInt(id) },
  });

  res.status(200).json({ message: "deletado", deletePost });
}
