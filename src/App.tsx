import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './routes/routes';
import LoadingProgress from './helpers/loading';

const LoadingPage = () => {
    return  <div
    className="flex max-w-full h-screen 
items-center justify-center font-bold
text-2xl
"
  >
    <div className="pr-4">
    Loading...
    </div>
    <LoadingProgress />
  </div>
};

const Homepage = lazy(() => import('./pages/homepage'));
const SearchPage = lazy(() => import('./pages/searchedpage'));
const RecipeContent = lazy(() => import('./pages/recipepage'));
const NotFound = lazy(() => import('./pages/not_found'));

function App() {

  return (
    <Router>
    <Suspense
      fallback={
       <LoadingPage />
      }
    >
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
        <Route path={ROUTES.RECIPE} element={<RecipeContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
  )
}

export default App
