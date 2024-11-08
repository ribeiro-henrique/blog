"use client";

//React imports
import { useRouter, useParams } from "next/navigation";

//Libs
import clsx from "clsx";

//Components
import Navigation from "@/components/navigation/navigation";
import ContentPost from "@/components/contentpost/contentpost";

//Assets
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  //@ts-ignore
  const { id_post } = useParams();

  const [post, setPost] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/getid/${id_post}`);

      const data = await response.json();
      setPost(data?.postById);
    };

    fetchData();
  }, []);

  return (
    <main
      className={clsx(
        "w-full px-6 py-8",
        "flex-col items-center justify-center"
      )}
    >
      <Navigation handleClick={() => router.back()} label="Voltar" />

      <ContentPost
        img={post?.imagem}
        alt={post?.alt}
        title={post?.titulo}
        date={post?.data}
        content={post?.conteudo}
      />
    </main>
  );
}
