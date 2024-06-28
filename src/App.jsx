import Welcome from "./pages/Welcome"
import Recipes from "./pages/Recipes"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Categories from "./pages/Categories";
import "./App.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />
  },

  {
    path: '/recipes',
    element: <Recipes />
  },

  {
    path: '/categories',
    element: <Categories />
  }

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Welcome />
      <Recipes/> */}
    </>

  )
}

export default App
