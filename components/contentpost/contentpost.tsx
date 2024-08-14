import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Divider from "../divider/divider";

type Props = {
  title: string;
  date: string;
  img: StaticImageData;
  alt: string;
  content: string;
};

export default function ContentPost({ title, date, img, alt, content }: Props) {
  return (
    <div
      className={clsx("flex flex-col w-full", "items-center justify-center")}
    >
      <h1 className={clsx("text-4xl", "text-neutral-500 text-center")}>
        {title}
      </h1>
      <Divider />

      <span className={clsx("text-zinc-400", "italic")}>{date}</span>

      <Image src={img} alt={alt} width={360} height={290} />

      <div className={clsx("w-full py-6")}>
        <p className={clsx("text-zinc-500", "text-justify")}>{content}</p>
      </div>
      <div className={clsx("w-full flex flex-col", "italic")}>
        <span className={clsx("text-zinc-500")}>Autor:</span>
        <span className={clsx("text-zinc-500")}>Pr Ronaldo Ribeiro</span>
      </div>
    </div>
  );
}
