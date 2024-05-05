import { Link, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../fetchRequest";
import { useEffect, useRef, useState } from "react";
import RenderMovieDetails from "../../components/RenderMovieDetails/RenderMovieDetails";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        setError(true);
      } finally {
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <div>
      {
        <Link to={backLinkHref.current}>
          <GoBackBtn />
        </Link>
      }
      {error && <p>Sorry, something went wrong..</p>}
      {movie && <RenderMovieDetails movie={movie} />}
    </div>
  );
}
