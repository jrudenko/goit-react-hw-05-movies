import { useState, useEffect, Suspense } from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../services/API";


 const MovieDetailsPage = () => {
     const { movieId } = useParams();
     const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => {
        if (res.status !== "Released") {
          console.log(res.status_message);
          return;
        }
        
        setMovieDetails(res);
      })
      .catch(error => console.log(error));
  }, [movieId]);


  if (!movieDetails) {
    return;
     };
     
       const { name, title, release_date, overview, genres, poster_path, vote_average } = movieDetails;
  const releaseYaer = new Date(release_date);
  let poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  if (!poster_path) {
    poster = 'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
  };

    return (
        <>
            <button onClick={()=> navigate(-1)}>go back</button>
      <section>
        <div>
          <img  src={poster} alt={title || name} width="240" height="320"/>
          <div>
            <h2>{title || name} ({releaseYaer.getFullYear()})</h2>
            <p>User score: {Math.round(vote_average * 10)} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{ genres && genres.length > 0 && genres.map(genr => genr.name).join(", ")}</p>
          </div>
        </div>
      </section>
      <section>
          <h3>Addination information</h3>
          <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
          </ul>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Outlet/>
        </section>
      </Suspense>
    </>
  );
};



export default MovieDetailsPage;