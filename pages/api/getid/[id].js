import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const postById = await prisma.post.findUnique({
        where: { id: parseInt(id) },
      });

      if (!postById) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(200).json({ message: "ok", postById });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
