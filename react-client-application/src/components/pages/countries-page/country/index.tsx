import css from "./index.module.css";
type Country = {
  name: string;
  flag: string;
  population: number;
  region: string;
  code: string;
};

export function Country(props: Country) {
  return (
    <div className={css.card}>
      <h1>{props.name}</h1>
      <h2> {props.region} </h2>
      <img src={props.flag} height={300} width={300} alt="" />
      <div>
        <input value={props.population} />
      </div>
      <div>
        <button>Show More</button>
      </div>
    </div>
  );
}
