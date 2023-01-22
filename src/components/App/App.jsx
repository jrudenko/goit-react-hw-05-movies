import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from 'components/AppBar';

// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from "pages/MovieDetailsPage"
// import MovieDetailsCast from "components/MovieDetailsCast";
// import MovieDetailsReviews from "components/MovieDetailsReviews"

const HomePage = lazy(() =>
  import('pages/HomePage')
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import(
    'pages/MovieDetailsPage')
);
const MovieDetailsReviews = lazy(() => import('components/MovieDetailsReviews'));
const MovieDetailsCast = lazy(() => import('components/MovieDetailsCast'));

 function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<MovieDetailsCast />} />
            <Route path="/movies/:movieId/cast" element={<MovieDetailsReviews />} />         
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  )

};
export default App;