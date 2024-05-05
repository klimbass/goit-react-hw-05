import { useEffect, useRef, useState } from "react";
import CastItem from "../CastItem/CastItem";
import css from "./CastRender.module.css";

export default function CastRender({ castList }) {
  const firstFiveActors = castList.slice(0, 5);
  const restActors = castList.slice(5);
  const [renderAllActors, setRenderAllActors] = useState(false);

  const handleClick = () => {
    setRenderAllActors(true);
  };

  const castListRef = useRef(null);

  useEffect(() => {
    if (castListRef.current) {
      castListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <ul className={css.castList} ref={castListRef}>
      {firstFiveActors.map((item) => {
        if (item.profile_path === null) return;
        return <CastItem key={item.id} item={item} />;
      })}
      {renderAllActors &&
        restActors.map((item) => {
          if (item.profile_path === null) return;
          return <CastItem key={item.id} item={item} />;
        })}
      {!renderAllActors && restActors.length > 0 && (
        <button className={css.button} onClick={handleClick}>
          Show all actors
        </button>
      )}
    </ul>
  );
}
