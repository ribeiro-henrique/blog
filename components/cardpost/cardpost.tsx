import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Divider from "../divider/divider";

type Props = {
  imagem: StaticImageData;
  alt: string;
  title: string;
  data: string;
  conteudo: string;
  handleFunction: () => void;
};

export default function CardPost({
  imagem,
  alt,
  title,
  data,
  conteudo,
  handleFunction,
}: Props) {
  return (
    <>
      <div
        onClick={() => handleFunction()}
        className={clsx(
          "w-full",
          "flex flex-col items-center justify-center",
          "px-1",
          "gap-4"
        )}
      >
        <Image src={imagem} alt={alt} width={360} height={290} />
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
              "font-medium",
              "cursor-pointer",
              "hover:underline"
            )}
          >
            {title}
          </h1>
        </div>
        <span className={clsx("text-zinc-400", "italic")}>{data}</span>
        <p className={clsx("text-zinc-500", "text-center", "line-clamp-4")}>
          {conteudo}
        </p>
      </div>
      <Divider />
    </>
  );
}
