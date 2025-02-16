import { useState } from "react";
import css from "./index.module.css";
import { NavLink, useNavigate } from "react-router";
export type Country = {
  name: string;
  flag: string;
  population: number;
  region: string;
  code: string;
};

export function Country(props: Country) {
  const [showPopulation, setShowPopulation] = useState<boolean>(false);

  return (
    <div className={css.card}>
      <NavLink to={`/country/${props.code}`}>
        <h1>{props.name}</h1>
      </NavLink>
      <h2> {props.region} </h2>
      <img src={props.flag} height={300} width={300} alt="" />
      <div>
        <button
          onClick={() => {
            setShowPopulation(!showPopulation);
          }}
        >
          Show More
        </button>
      </div>
      {showPopulation ? (
        <div>
          <input value={props.population} />
        </div>
      ) : null}
    </div>
  );
}
