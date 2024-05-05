import { Link, Outlet } from "react-router-dom";
import css from "./RenderMovieDetails.module.css";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

export default function RenderMovieDetails({ movie }) {
  return (
    <div className={css.box}>
      <div className={css.card}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="alt"
        />
        <div>
          <div className={css.titleBox}>
            <h2 className={css.title}>{movie.title}</h2>
            <p>{movie.release_date.slice(0, 4)}</p>
          </div>
          <div className={css.discr}>
            <p className={css.over}>
              User score: {Math.round(movie.vote_average * 10)}%
            </p>
            <p>
              <span className={css.over}>Overview:</span> {movie.overview}
            </p>
          </div>
          <h3>Genres:</h3>

          <ul className={css.genres}>
            {movie.genres.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
          <div>
            <h3>Additional information:</h3>
            <ul className={css.addList}>
              <li>
                <Link to="cast" className={css.addItem}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" className={css.addItem}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
