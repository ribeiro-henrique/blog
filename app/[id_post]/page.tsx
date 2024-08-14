"use client";

//React imports
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Divider from "@/components/divider/divider";

//Libs
import clsx from "clsx";

//Assets
import Menino from "@/public/assets/img/menino.jpg";

export default function Post() {
  const { id_post } = useParams();
  const router = useRouter();

  return (
    <main
      className={clsx(
        "w-full px-6 py-8",
        "flex-col items-center justify-center"
      )}
    >
      <nav className={clsx("w-full", "py-6")}>
        <button
          className={clsx("italic", "text-neutral-500")}
          onClick={() => router.back()}
        >
          {" "}
          ⭠ Voltar
        </button>
      </nav>
      <div
        className={clsx("flex flex-col w-full", "items-center justify-center")}
      >
        <h1 className={clsx("text-4xl", "text-neutral-500 text-center")}>
          A Terra onde os sonhos se tornam realidade
        </h1>
        <Divider />

        <span className={clsx("text-zinc-400", "italic")}>13/08/2024</span>

        <Image src={Menino} alt="" />

        <div className={clsx("w-full py-6")}>
          <p className={clsx("text-zinc-500", "text-center")}>
            A vida é um turbilhão. Uma dança frenética entre alegrias efêmeras e
            tristezas profundas, entre a certeza inabalável e a dúvida que nos
            assola no meio da noite. Em meio a esse caos, buscamos âncoras,
            faróis que iluminem o caminho e nos guiem em meio à névoa densa da
            incerteza. Para muitos, como eu, essas âncoras residem na fé, na
            família e na busca incessante por significado em um mundo que muitas
            vezes parece desprovido de sentido.
            <br />
            <br />E a família? Aquela constelação de almas que, por laços de
            sangue ou por laços do coração, se unem para trilhar juntas a
            jornada da vida. Um porto seguro em meio à tempestade, um abraço
            acolhedor após um longo dia. É na família que aprendemos o
            significado do amor incondicional, da paciência, do perdão. É no
            seio familiar que construímos nossas primeiras memórias, que
            aprendemos a lidar com as diferenças, a celebrar as conquistas e a
            oferecer o ombro amigo nos momentos de dor.
          </p>
        </div>
        <div className={clsx("w-full flex flex-col", "italic")}>
          <span className={clsx("text-zinc-500")}>Autor:</span>
          <span className={clsx("text-zinc-500")}>Pr Ronaldo Ribeiro</span>
        </div>
      </div>
    </main>
  );
}
