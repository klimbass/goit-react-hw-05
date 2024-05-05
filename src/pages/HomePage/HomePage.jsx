import { useEffect, useState } from "react";
import { getTrendingDay } from "../../fetchRequest";
import Loader from "../../components/Loader/Loader";
import RenderMoviesList from "../../components/RenderMoviesList/RenderMoviesList";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [trendList, setTrendList] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchTrendList = async () => {
      try {
        setLoading(true);
        const data = await getTrendingDay();
        setTrendList(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendList();
  }, []);

  return (
    <div>
      <h2>Trending today:</h2>
      {loading && <Loader />}
      {error && <h2>Something went wrong</h2>}
      {trendList.length > 0 && <RenderMoviesList moviesList={trendList} />}
    </div>
  );
}
