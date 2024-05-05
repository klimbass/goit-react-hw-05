import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getSearchMovie } from "../../fetchRequest";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import RenderMoviesList from "../../components/RenderMoviesList/RenderMoviesList";

export default function MoviePage() {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const [userQuery, setUserQuery] = useState(searchParams.get("query") ?? "");
  const [error, setError] = useState(false);
  const [dataResponse, setDataResponse] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getSearchMovie(userQuery);
        setDataResponse(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userQuery]);
  return (
    <div>
      <SearchForm setUserQuery={setUserQuery} />
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {dataResponse.length > 0 && (
        <RenderMoviesList moviesList={dataResponse} />
      )}
    </div>
  );
}
