import clsx from "clsx";

//Assets
import Menino from "@/public/assets/img/menino.jpg";
import Floresta from "@/public/assets/img/floresta.jpg";

//Components
import Divider from "@/components/divider/divider";
import CardPost from "@/components/cardpost/cardpost";

//Esse bloco será alterado posteriormente para o retorno da API
const response = [
  {
    img: Menino,
    img_descricao: "menino lendo",
    titulo: "A Terra onde os sonhos se tornam realidade",
    data_post: "21-07-2024",
    descricao:
      "Se os seus sonhos não derem certo, Estarei sempre lá para você. Se precisar se esconder, Terá sempre minha mão. Mesmo se o céu desabar, Estarei sempre contigo.",
  },
  {
    img: Floresta,
    img_descricao: "foto da floresta",
    titulo: "Viva, aproveite, registre!",
    data_post: "26-07-2024",
    descricao:
      "Aproveitar a vida pra mim? Tomar impulso ao caminho do céu. Harmonizar-me com meu irmão. Silenciar e estar em paz comigo. Aproveitar a vida depende do que você ...",
  },
];

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
      {response.map((e, index) => (
        <CardPost
          key={index}
          img={e.img}
          alt={e.img_descricao}
          title={e.titulo}
          dataPost={e.data_post}
          description={e.descricao}
        />
      ))}
    </div>
  );
}
