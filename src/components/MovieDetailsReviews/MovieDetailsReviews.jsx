import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsReviews } from "../../services/API";
import Message from 'components/Message';
import s from './MovieDetailsReviews.module.css';

const MovieDetailsReviews = () => {  
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);


 useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getMovieDetailsReviews(movieId);
        setReviews(res.results); 
      } catch (error) {
      console.error('Smth wrong with fetch reviews on movie page', error);
      setError(error.message);
    }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
     
      {reviews.length > 0 ? (
         <ul className={s.review}>
        {reviews.map(({ id, author, content }) => {    
          return (
            <li key={id} className={s.item}>
             <h3 className={s.author}>Author: {author} </h3>
               <p>{content}</p>              
          </li>
          );
        })}
      </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}

      {error && (
        <Message>
          <h2>
            The service is temporarily unavailable. Please try again later.
          </h2>
        </Message>
      )}
    </div>
  );  
};

export default MovieDetailsReviews;

