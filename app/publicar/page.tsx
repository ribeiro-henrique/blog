import clsx from "clsx";

export default function Publicar() {
  return (
    <main
      className={clsx(
        "w-full h-screen",
        "flex flex-col",
        "items-center",
        "gap-4",
        "py-3"
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
        FORMULÁRIO PARA PUBLICAÇÃO:
      </h1>

      {/* FORM */}
      {/* FORM */}
      {/* FORM */}

      <form
        className={clsx(
          "w-full",
          "px-6",
          "font-medium",
          "text-xl",
          "flex flex-col gap-3"
        )}
        action=""
        method="post"
      >
        <label
          className={clsx("flex flex-col", "text-2xl", "text-neutral-600")}
          htmlFor=""
        >
          Título:
          <input
            className={clsx(
              "border-4 border-[#2E69FF25]",
              "rounded-lg",
              "py-1",
              "text-base"
            )}
            type="text"
            id="title"
            autoComplete="title"
          />
        </label>
        <label
          className={clsx("flex flex-col", "text-2xl", "text-neutral-600")}
          htmlFor=""
        >
          Mensagem:
          <textarea
            className={clsx(
              "border-4 border-[#2E69FF25]",
              "rounded-lg",
              "py-1",
              "h-96",
              "text-base"
            )}
          />
        </label>
        <label
          className={clsx("flex flex-col", "text-2xl", "text-neutral-600")}
          htmlFor=""
        >
          Imagem:
          <input
            className={clsx("text-xs")}
            type="file"
            src=""
            alt=""
            accept="image/jpeg"
          />
        </label>
        <label
          className={clsx("flex flex-col", "text-2xl", "text-neutral-600")}
          htmlFor=""
        >
          <input
            className={clsx(
              "border-4 border-[#2E69FF25]",
              "rounded-lg",
              "py-1 px-1",
              "text-base"
            )}
            placeholder="O que é a imagem?"
            type="text"
            id="title"
            autoComplete="title"
          />
        </label>
      </form>
    </main>
  );
}
