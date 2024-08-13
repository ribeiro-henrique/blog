"use client";

//React imports
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

//Libs
import clsx from "clsx";

//Assets
import Menino from "@/public/assets/img/menino.jpg";

export default function Post() {
  const { id_post } = useParams();
  const router = useRouter();

  return (
    <main className={clsx("w-full px-6 py-8")}>
      <nav>
        <button onClick={() => router.back()}>Voltar</button>
      </nav>
      <div>
        <Image src={Menino} alt="" />
        <h1>{id_post}</h1>
      </div>
    </main>
  );
}
