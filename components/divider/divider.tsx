import clsx from "clsx";

export default function Divider() {
  return (
    <div className={clsx("flex w-full", "items-center justify-center", "py-7")}>
      <div className={clsx("h-0.5 w-20", "bg-[#d8c4a6]")} />
    </div>
  );
}
