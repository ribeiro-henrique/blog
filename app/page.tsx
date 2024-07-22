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
        description="Se os seus sonhos não derem certo, Estarei sempre lá para você. Se precisar se esconder, Terá sempre minha mão. Mesmo se o céu desabar, Estarei sempre contigo."
      />

      <Divider />
      <CardPost
        img={Floresta}
        alt="foto da floresta"
        title="Viva, aproveite, registre!"
        dataPost="26-07-2024"
        description="Aproveitar a vida pra mim? Tomar impulso ao caminho do céu. Harmonizar-me com meu irmão. Silenciar e estar em paz comigo. Aproveitar a vida depende do que você ..."
      />
    </div>
  );
}
