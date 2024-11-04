// app/page.js
"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Divider from "@/components/divider/divider";
import CardPost from "@/components/cardpost/cardpost";
import { useRouter } from "next/navigation";
import { Post } from "@/types/post.interface";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const routes = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get");
      const data = await response.json();
      setPosts(data.data);
    };

    fetchData();
  }, []);

  return (
    <div
      className={clsx(
        "w-full",
        "px-6 py-8",
        "flex-col items-center justify-center"
      )}
    >
      <div className={clsx("flex w-full", "items-center justify-center")}>
        <h1 className={clsx("text-4xl", "text-neutral-500")}>Todos os posts</h1>
      </div>
      <Divider />
      {posts.map((e, index) => (
        <CardPost
          key={index}
          img={e.img}
          alt={e.img_descricao}
          title={e.titulo}
          dataPost={e.data_post}
          description={e.descricao}
          handleFunction={() => routes.push(`${e.id}`)}
        />
      ))}
    </div>
  );
}
