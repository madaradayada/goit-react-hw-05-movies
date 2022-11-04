import MovieCard from 'components/MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMovieById } from 'services/Api';
import Loader from 'services/components/Loader/Loader';
import { GoBack } from './MovieDetailsStyled';
import Notify from 'services/components/Notify/Notify';

export default function MovieDetails() {
  const [movie, setMovie] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from ?? '/'; 

  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieById(movieId);
        setMovie(result);
      } catch (e) {
        setError(e.toJSON());
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      {loading && <Loader />}
      {error && <Notify msg={error} />}
      <GoBack onClick={goBack}>Go Back</GoBack>
      {movie && <MovieCard movie={movie} />}
    </>
  );
}