import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function POST(req, res) {
  const publicacao = req.body;

  const post = await prisma.post.create({
    data: publicacao,
  });

  res.status(201).json({ message: "ok", post });
}
