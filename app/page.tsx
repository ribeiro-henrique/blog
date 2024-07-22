import clsx from "clsx";

//Assets
import Menino from "@/public/assets/img/menino.jpg";
import Floresta from "@/public/assets/img/floresta.jpg";

//Components
import Divider from "@/components/divider/divider";
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
      <Divider />
      <CardPost
        img={Menino}
        alt="menino lendo"
        title="A Terra onde os sonhos se tornam realidade"
        dataPost="21-07-2024"
        description="Bem-vindo à solarenga California. Uma terra repleta de longas praias,
        ondas perfeitas, natureza estonteante e pessoas extremamente bonitas que
        sabem como"
      />

      <Divider />
      <CardPost
        img={Floresta}
        alt="foto da floresta"
        title="Vista de tirar o fôlego no topo da montanha"
        dataPost="26-07-2024"
        description="Este é o lugar onde o seu texto começa. Pode clicar aqui e começar a digitar. Velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad"
      />
    </div>
  );
}
