// import { Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import AppBar from 'components/AppBar';

function App() {
  return (
    <>
      <AppBar />
        {/* <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
         
          <Route path="*" element={<HomePage />} />
        </Routes> */}
    </>
  )

};
export default App;