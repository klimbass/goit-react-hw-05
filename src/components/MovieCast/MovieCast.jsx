import { useEffect, useState } from "react";
import { getCastMovie } from "../../fetchRequest";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import CastRender from "../CastRender/CastRender";

export default function MovieCast() {
  const [castList, setCastList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getCastMovie(movieId);
        setCastList(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Sorry, something went wrong</p>}
      {castList.length > 0 && <CastRender castList={castList} />}
    </div>
  );
}
