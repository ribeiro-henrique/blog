import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type Props = {
  img: StaticImageData;
  alt: string;
  title: string;
  dataPost: string;
  description: string;
};

export default function CardPost({
  img,
  alt,
  title,
  dataPost,
  description,
}: Props) {
  return (
    <div
      className={clsx(
        "w-full",
        "flex flex-col items-center justify-center",
        "px-1",
        "gap-4"
      )}
    >
      <Image src={img} alt={alt} width={360} height={290} />
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
      <span className={clsx("text-zinc-400", "italic")}>{dataPost}</span>
      <p className={clsx("text-zinc-500", "text-center")}>{description}</p>
    </div>
  );
}
