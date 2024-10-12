import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
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