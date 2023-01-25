import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../services/API";
import s from './MovieDetailsPage.module.css';
import Container from 'components/Container';
import HeadingPage from '../HeadingPage';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getYear = () => new Date(movie.release_date).getFullYear();

  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  let activeClassName = {
    color: '#2196f3',
  };

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(error => {
        setError('Ooops. Something went wrong...');
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <Container>
        <button onClick={handleClick} className={s.backButton}>
          Go back
        </button>

        {movie && <HeadingPage text={movie.title} />}
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>({getYear()})</p>
            <p>User Score: {movie.popularity}</p>
            <div className="movie_overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
        <hr />
        <div>
          <h2>Additional Information</h2>          
          <NavLink
            to={`/movies/${movieId}/reviews`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <button className={s.backButton}>Reviews</button>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <button className={s.backButton}>Cast</button>
          </NavLink>
          <hr />
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default MovieDetailsPage;