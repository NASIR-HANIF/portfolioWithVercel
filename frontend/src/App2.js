import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './actions/user';

// Lazy loading components
//const Home = React.lazy(() => import('./components/Home/Home'));
const Home = React.lazy(() => import('./components/Home/Home2'));
const About = React.lazy(() => import('./components/About/About'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Login = React.lazy(() => import('./components/Login/Login'));
const AdminPanel = React.lazy(() => import('./components/Admin/AdminPanel'));
const TimeLine = React.lazy(() => import('./components/Admin/Timeline'));
const Youtube = React.lazy(() => import('./components/Admin/Youtube'));
const Project = React.lazy(() => import('./components/Admin/Project'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? <Loader /> : (
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home youtubes={user?.youtube} timelines={user?.timeline} skills={user?.skills} />} />
              <Route path="/about" element={<About about={user?.about} />} />
              <Route path="/projects" element={<Projects projects={user?.projects} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
              <Route path="/admin/timeline" element={isAuthenticated ? <TimeLine /> : <Login />} />
              <Route path="/admin/youtube" element={isAuthenticated ? <Youtube /> : <Login />} />
              <Route path="/admin/project" element={isAuthenticated ? <Project /> : <Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
