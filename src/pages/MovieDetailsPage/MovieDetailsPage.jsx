import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../services/API";
import s from './MovieDetailsPage.module.css';
import Container from 'components/Container';
import HeadingPage from '../HeadingPage';


//  const MovieDetailsPage = () => {
//      const { movieId } = useParams();
//      const navigate = useNavigate();
//     const [movieDetails, setMovieDetails] = useState(null);

//   useEffect(() => {
//     getMovieDetails(movieId)
//       .then(res => {
//         if (res.status !== "Released") {
//           console.log(res.status_message);
//           return;
//         }
        
//         setMovieDetails(res);
//       })
//       .catch(error => console.log(error));
//   }, [movieId]);


//   if (!movieDetails) {
//     return;
//      };
     
//        const { name, title, release_date, overview, genres, poster_path, vote_average } = movieDetails;
//   const releaseYaer = new Date(release_date);
//   let poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

//   if (!poster_path) {
//     poster = 'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
//   };

//     return (
//         <>
//             <button onClick={()=> navigate(-1)}>go back</button>
//       <section>
//         <div>
//           <img  src={poster} alt={title || name} width="240" height="320"/>
//           <div>
//             <h2>{title || name} ({releaseYaer.getFullYear()})</h2>
//             <p>User score: {Math.round(vote_average * 10)} %</p>
//             <h3>Overview</h3>
//             <p>{overview}</p>
//             <h4>Genres</h4>
//             <p>{ genres && genres.length > 0 && genres.map(genr => genr.name).join(", ")}</p>
//           </div>
//         </div>
//       </section>
//       <section>
//           <h3>Addination information</h3>
//           <ul>
//             <li><Link to="cast">Cast</Link></li>
//             <li><Link to="reviews">Reviews</Link></li>
//           </ul>
//         </section>
//         <Suspense fallback={<div>Loading...</div>}>
//         <section>
//           <Outlet/>
//         </section>
//       </Suspense>
//     </>
//   );
// };



// export default MovieDetailsPage;

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
        console.log(error);
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
            <p className={s.reviews}>Reviews</p>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p className={s.cast}>Cast</p>
          </NavLink>
          <hr />
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default MovieDetailsPage;