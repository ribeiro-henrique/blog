"use client";

//React imports
import { useRouter } from "next/navigation";

//Libs
import clsx from "clsx";

//Components
import Navigation from "@/components/navigation/navigation";
import ContentPost from "@/components/contentpost/contentpost";

//Assets
import Menino from "@/public/assets/img/menino.jpg";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();

  const [post, setPost] = useState<any>();

  const idPost = {
    imagem: Menino,
    alt: "Menino",
    titulo: "A Terra onde os sonhos se tornam realidade",
    data: "13/08/2024",
    conteudo:
      "A vida é um turbilhão. Uma dança frenética entre alegrias efêmeras e tristezas profundas, entre a certeza inabalável e a dúvida que nos assola no meio da noite. Em meio a esse caos, buscamos âncoras, faróis que iluminem o caminho e nos guiem em meio à névoa densa da incerteza. Para muitos, como eu, essas âncoras residem na fé, na família e na busca incessante por significado em um mundo que muitas vezes parece desprovido de sentido. E a família? Aquela constelação de almas que, por laços de sangue ou por laços do coração, se unem para trilhar juntas a jornada da vida. Um porto seguro em meio à tempestade, um abraço acolhedor após um longo dia. É na família que aprendemos o significado do amor incondicional, da paciência, do perdão. É no seio familiar que construímos nossas primeiras memórias, que aprendemos a lidar com as diferenças, a celebrar as conquistas e a oferecer o ombro amigo nos momentos de dor.",
  };

  //Valor mockado, vou pegar da API posteriormente
  //Dinamicamente, com base no id do post
  useEffect(() => {
    setPost(idPost);
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
