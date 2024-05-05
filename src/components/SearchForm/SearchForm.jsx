import { useNavigate } from "react-router-dom";
import css from "./SearchForm.module.css";

export default function SearchForm({ setUserQuery }) {
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const query = ev.target.movie.value.trim();
    if (query === "") {
      alert("Please enter search term!");
      return;
    }
    navigate(`?query=${query}`, { replace: true });
    setUserQuery(query);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="movie" className={css.input} />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
