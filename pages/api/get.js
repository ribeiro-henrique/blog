import fs from "fs";
import path from "path";

export default function GET(req, res) {
  // Caminho para o arquivo JSON
  const filePath = path.join(process.cwd(), "data.json");

  // Lê o conteúdo atual do arquivo JSON
  const fileContents = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "[]";
  const data = JSON.parse(fileContents);

  res.status(200).json({ message: "ok", data });
}
