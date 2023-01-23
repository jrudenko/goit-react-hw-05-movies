import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailsReviews } from "../../services/API";


const MovieDetailsReviews = () => {
  
  const { movieId } = useParams();

  const [movieDetailsReviews, setMovieDetailsReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getMovieDetailsReviews(movieId);
        setMovieDetailsReviews(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {movieDetailsReviews.map(({ id, author, content }) => {    
          return (
            <li key={id}>
             <p>Author: {author}</p>
             <p>{content}</p>
          </li>
          );
        })}
      </ul>
     </>
  );
};

export default MovieDetailsReviews;