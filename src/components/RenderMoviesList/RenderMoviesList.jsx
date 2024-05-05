import { Link, useLocation } from "react-router-dom";
import css from "./RenderMoviesList.module.css";

export default function RenderMoviesList({ moviesList }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {moviesList.map((item) => {
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
