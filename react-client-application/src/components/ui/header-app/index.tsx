import css from "./index.module.css";

type HeaderProps = {
  title: string;
  color?: string;
};

export function HeaderApp(props: HeaderProps) {
  const { color = "blue" } = props;
  if (!props.title) return;
  return (
    <h1 style={{ color }} className={css.mainHeader}>
      {props.title}
    </h1>
  );
}
