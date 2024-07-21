import clsx from "clsx";
import Menino from "@/public/assets/img/menino.jpg";
import CardPost from "@/components/cardpost/cardpost";

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
      <CardPost
        img={Menino}
        alt="menino lendo"
        title="A Terra onde os sonhos se tornam realidade"
        dataPost="21-07-2024"
        description="Bem-vindo à solarenga California. Uma terra repleta de longas praias,
        ondas perfeitas, natureza estonteante e pessoas extremamente bonitas que
        sabem como"
      />
    </div>
  );
}
