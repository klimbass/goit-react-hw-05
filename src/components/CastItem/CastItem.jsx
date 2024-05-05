import css from "./CastItem.module.css";

export default function CastItem({ item }) {
  return (
    <li key={item.id} className={css.castItem}>
      <img
        className={css.castImg}
        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
        alt={item.name}
      />
      <p className={css.title}>{item.name}</p>
      <p className={css.character}>{item.character}</p>
    </li>
  );
}
