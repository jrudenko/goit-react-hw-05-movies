import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetailsCast } from "../../services/API";


const MovieDetailsCast = () => {
    const { movieId } = useParams();
    const [movieDetailsCast, setMovieDetailsCast] = useState(null);

  useEffect(() => {
    getMovieDetailsCast(movieId)
      .then(res => {
        if (res.cast) {
          setMovieDetailsCast(res.cast); 
        } else {
          console.log("результатів немає", res);
        }
      })
      .catch(error => console.log(error));
  }, [movieId]);


   if (!movieDetailsCast) {
    return;
  };

 return (
    <>
      <ul>
        {movieDetailsCast.map(item => {
          const { id, name, character, profile_path } = item;
          let profileImg = `https://image.tmdb.org/t/p/w500${profile_path}`;

          if (!profile_path) {
            profileImg = 'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
          };

          return (
            <li key={id}>
              <img src={profileImg} alt={name} width="120"/>
              <p>{name}</p>
              <p>{character}</p>
            </li>
          )
        })}
      </ul>
    </>
  );
};  

export default MovieDetailsCast;