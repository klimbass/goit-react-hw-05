import css from "./MovieReviewRender.module.css";

export default function MovieReviewRender({ reviewsList }) {
  return (
    <ul className={css.list}>
      {reviewsList.map((item) => {
        return (
          <li key={item.id} className={css.item}>
            <h5 className={css.title}>Author: {item.author}</h5>
            {console.log(item)}
            <p className={css.text}>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
