import clsx from "clsx";

type Props = {
  handleClick: () => void;
  label: string;
};

export default function Navigation({ handleClick, label }: Props) {
  return (
    <nav className={clsx("w-full", "py-6")}>
      <button
        className={clsx("italic", "text-neutral-500")}
        onClick={() => handleClick()}
      >
        {" "}
        ⭠ {label}
      </button>
    </nav>
  );
}
