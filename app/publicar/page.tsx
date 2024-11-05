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
        className={clsx("w-full", "px-6", "font-medium", "text-xl")}
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
              "py-1"
            )}
            type="text"
            id="title"
            autoComplete="title"
          />
        </label>
      </form>
    </main>
  );
}
