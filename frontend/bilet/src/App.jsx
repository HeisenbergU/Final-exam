import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../src/reset.scss'
import { Counter } from "./redux/counter/Counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/home'
import Hero from './pages/hero/Hero'
import Herob from "./pages/herobottom/Herob";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/",
      element: <Hero/>,
    },
    {
      path: "/",
      element: <Herob/>,
    },
  ]);

  return (
    <>
      {/* SALAMMMMM */}
      {/* <Counter /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
