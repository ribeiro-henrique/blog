import clsx from "clsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div
      className={clsx(
        "w-full h-20",
        "bg-[#424242]",
        "px-6 py-6",
        "flex flex-col",
        "gap-2"
      )}
    >
      <p className={clsx("text-xs", "text-neutral-300", "text-center")}>
        © {year} Igreja Batista Getsemani, rua um 530 - Vespasiano
      </p>
      <p className={clsx("text-xs", "text-neutral-300", "text-center")}>
        Desenvolvido por{" "}
        <span className={clsx("underline", "cursor-pointer")}>
          <a
            href="https://www.linkedin.com/in/hesr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Henrique Ribeiro
          </a>
        </span>
      </p>
    </div>
  );
}
