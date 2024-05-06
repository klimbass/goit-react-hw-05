import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movieList }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movieList.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={`/movies/${item.id}`}
              state={location}
              className={css.item}
            >
              <p>{item.title}</p>
              <p>({item.release_date.slice(0, 4)})</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
