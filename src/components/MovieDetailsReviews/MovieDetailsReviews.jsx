import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailsReviews } from "../../services/API";


// const MovieDetailsReviews = () => {
//   const { movieId } = useParams();
//   const [movieDetailsReviews, setMovieDetailsReviews] = useState(null);

//   useEffect(() => {
//     getMovieDetailsReviews(movieId)
//       .then(res => {
//         if (res.total_results) {
//           setMovieDetailsReviews(res.results); 
//         }
//       })
//       .catch(error => console.log(error));
//   }, [movieId]);
  
//   if (!movieDetailsReviews) {
//     return <p>Sorry, but we don't have any reviews on this movie</p>;
//   };

//   return (
//     <>
//       <ul>
//         {movieDetailsReviews.map(item => {
//           const { id, author, content } = item;
          
//           return (
//             <li key={id}>
//               <p>Author: {author}</p>
//               <p>{content}</p>
//             </li>
//           )}
//         )}
//       </ul>
//     </>
    
//   );
// };  

// export default MovieDetailsReviews;

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
        {movieDetailsReviews.map(item => {
          const { id, author, content } = item;
          
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