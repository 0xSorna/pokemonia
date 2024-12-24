import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Favorites } from "./components/favorites/favorites";
import { Home } from './components/Home/home';
import { LandingPage } from "./components/landingpage/landingpage";
import { PokemonDetail } from "./components/pokemondetails/poke-details";
import { Profile } from "./components/profile/profile";
import { Types } from "./components/typespage/types";
import { RootLayout } from './layouts/RootLayout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element : <RootLayout children={<LandingPage />} />,
    },
    {
      path: "/pokemons",
      element: <RootLayout children={<Home />} />,
    }, 
    {
      path: "/types",
      element: <RootLayout children={<Types />} />,
    },
    {
      path: "/profile",
      element: <RootLayout children={<Profile />} />,
    },
    {
      path: "/pokemons/:id",
      element: <RootLayout children={<PokemonDetail />} />,
    },
    {
      path: "/favorites",
      element: <RootLayout children={<Favorites />} />,
    },
    {
      path: "/*",
      element: <div>404</div>,
    }
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
