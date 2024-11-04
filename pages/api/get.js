// pages/api/get.js
import fs from "fs";
import path from "path";

export default function fetchPosts(req, res) {
  const filePath = path.join(process.cwd(), "data.json");

  const fileContents = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "[]";
  const data = JSON.parse(fileContents);

  res.status(200).json({ message: "ok", data });
}
