import fs from "fs";
import path from "path";

export default function POST(req, res) {
  const publicacao = req.body;

  // Caminho do arquivo
  const caminhoArquivo = path.join(process.cwd(), "data.json");

  // Lê o conteúdo atual do arquivo JSON com tratamento de erro
  let data = [];
  if (fs.existsSync(caminhoArquivo)) {
    try {
      const fileContents = fs.readFileSync(caminhoArquivo, "utf8");
      data = JSON.parse(fileContents || "[]"); // Usa "[]" se o arquivo estiver vazio
    } catch (error) {
      console.error("Erro ao fazer parse do JSON:", error);
      return res
        .status(500)
        .json({ message: "Erro ao processar o arquivo de dados." });
    }
  }

  // Gera um novo ID baseado no anterior
  const newId =
    data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;

  // Adiciona o novo dado ao array existente
  data.push({ ...publicacao, id: newId });

  // Grava o array atualizado de volta no arquivo
  fs.writeFileSync(caminhoArquivo, JSON.stringify(data, null, 2));

  // Responde com o novo dado adicionado
  res.status(201).json({ message: "ok", publicacao, id: newId });
}
