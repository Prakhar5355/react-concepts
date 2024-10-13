import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import { UserProvider } from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';
// import Contact from './components/Contact';

// Lazy load the About component
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

// Define your routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact name={"prakhar"} />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);

function App() {
  return (
    // Wrap the entire RouterProvider with Suspense
    <Provider store={store}>
    <UserProvider>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={appRouter} />
    </Suspense>
    </UserProvider>
    </Provider>
  );
}
// older syntax with BowserRouter and Routes
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
