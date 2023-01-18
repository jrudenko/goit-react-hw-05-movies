import { Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import AppBar from 'components/AppBar';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from "pages/MovieDetailsPage"
import MovieDetailsCast from "components/MovieDetailsCast";
import MovieDetailsReviews from "components/MovieDetailsReviews"

 function App() {
  return (
    <>
      <AppBar />
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieDetailsCast />} />
            <Route path="reviews" element={<MovieDetailsReviews />} />
         
          </Route>
          {/* <Route path="*" element={<HomePage />} /> */}
        </Routes>
    </>
  )

};
export default App;