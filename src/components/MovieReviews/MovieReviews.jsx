import { useEffect, useState } from "react";
import { getReviews } from "../../fetchRequest";
import { useParams } from "react-router-dom";
import MovieReviewRender from "../MovieReviewRender/MovieReviewRender";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getReviews(movieId);
        setReviewsList(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Sorry, something went wrong..</p>}
      {reviewsList.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}

      {reviewsList.length > 0 && (
        <MovieReviewRender reviewsList={reviewsList} />
      )}
    </div>
  );
}
