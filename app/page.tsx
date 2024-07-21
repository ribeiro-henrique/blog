import clsx from "clsx";
import Menino from "@/public/assets/img/menino.jpg";
import Image from "next/image";

export default function Home() {
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
      <div
        className={clsx("flex w-full", "items-center justify-center", "py-7")}
      >
        <div className={clsx("h-0.5 w-20", "bg-[#d8c4a6]")} />
      </div>
      <div
        className={clsx(
          "w-full",
          "flex flex-col items-center justify-center",
          "px-1",
          "gap-4"
        )}
      >
        <Image src={Menino} alt="menino lendo" />
        <div
          className={clsx(
            "w-full",
            "text-balance",
            "flex justify-center items-center"
          )}
        >
          <h1
            className={clsx(
              "text-2xl",
              "text-neutral-500",
              "text-center",
              "font-medium"
            )}
          >
            A terra onde os sonhos se tornam realidade
          </h1>
        </div>
        <span className={clsx("text-zinc-400", "italic")}>21-07-2024</span>
        <p className={clsx("text-zinc-500", "text-center")}>
          Bem-vindo à solarenga California. Uma terra repleta de longas praias,
          ondas perfeitas, natureza estonteante e pessoas extremamente bonitas
          que sabem como
        </p>
      </div>
    </div>
  );
}
