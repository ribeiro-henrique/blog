"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Publicar() {
  const [imageBase64, setImageBase64] = useState<any>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState<any>();
  const [payload, setPayload] = useState({
    imagem: "imageBase64",
    alt: "description",
    titulo: "title",
    data: "date",
    conteudo: "content",
  });

  // func para formatar a data no formato br
  const handleDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1; // meses começam em 0
    let day = today.getDay();

    // formatando  a data
    if (day < 10) {
      day = 0 + day;
    }
    if (month < 10) {
      month = 0 + month;
    }
    const dataHoje = `${day}/${month}/${year}`;
    return dataHoje;
  };

  // func para transformar img em base64
  const handleImage = (e: any) => {
    const img = e.target.files[0];
    if (img) {
      const navegadorReader = new FileReader(); //api do navegador para leitura de arquivos
      navegadorReader.onloadend = () => {
        //quando finalmente acabar a leitura do arquivo
        const imgBase64 = navegadorReader.result;
        setImageBase64(imgBase64);
      };
      navegadorReader.readAsDataURL(img);
    }
  };

  // func para  enviar dados para o backend

  const handleSubmit = async () => {
    await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  useEffect(() => {
    setDate(handleDate());
  }, []);

  useEffect(() => {
    setPayload({
      imagem: imageBase64,
      alt: description,
      titulo: title,
      data: date,
      conteudo: content,
    });
  }, [imageBase64, title, date, content, description]);

  return (
    <main
      className={clsx(
        "w-full h-screen",
        "flex flex-col",
        "items-center",
        "gap-4",
        "py-3"
      )}
    >
      <h1
        className={clsx(
          "text-2xl",
          "text-neutral-500",
          "text-center",
          "font-medium",
          "cursor-pointer",
          "hover:underline"
        )}
      >
        FORMULÁRIO PARA PUBLICAÇÃO:
      </h1>

      <form
        className={clsx(
          "w-full",
          "px-6",
          "font-medium",
          "text-xl",
          "flex flex-col gap-3"
        )}
        action=""
        method="post"
        // onSubmit={() => handleSubmit()}
      >
        <label
          className={clsx("flex flex-col", "text-2xl", "text-neutral-600")}
          htmlFor=""
        >
          Título:
          <input
            className={clsx(
              "border-4 border-[#2E69FF25]",
              "rounded-lg",
              "py-1",
              "text-base"
            )}
            type="text"
            autoComplete="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label
          className={clsx("flex flex-col", "text-2xl", "text-neutral-600")}
          htmlFor=""
        >
          Mensagem:
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className={clsx(
              "border-4 border-[#2E69FF25]",
              "rounded-lg",
              "py-1",
              "h-96",
              "text-base"
            )}
          />
        </label>
        <label
          className={clsx("flex flex-col", "text-2xl", "text-neutral-600")}
          htmlFor=""
        >
          Imagem:
          <input
            className={clsx("text-xs")}
            type="file"
            accept="image/jpeg"
            onChange={handleImage}
          />
        </label>
        <label
          className={clsx("flex flex-col", "text-2xl", "text-neutral-600")}
          htmlFor=""
        >
          <input
            className={clsx(
              "border-4 border-[#2E69FF25]",
              "rounded-lg",
              "py-1 px-1",
              "text-base"
            )}
            placeholder="O que é a imagem?"
            type="text"
            autoComplete="off"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </form>
      <button onClick={() => handleSubmit()}>ENVIAR</button>
    </main>
  );
}
