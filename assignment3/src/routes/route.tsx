import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/HomePage";
import AllNew from "@pages/AllNew";
import DetailNew from "@pages/DetailNew";
import MainPage from "@pages/MainPage";
import NotFound from "@pages/NotFound";
import LayoutHome from "@components/LayoutHome";
import Modulecss from "@styleui/modulecss";
import Workshop from "@styleui/workshop";
import VisaPage1 from "@styleui/visapage1";
import VisaPage2 from "@styleui/visapage2";
import Workshop_tail from "@tailwindworkshop/Workshop_tail";
import Workshop_back from "@tailwindworkshop/Workshop_back";
import Workshop_ant from "@antframework/Workshop_ant";
import Counter from "@components/Counter";
import Regisredux from "@components/Workshop_redux";
import Fetchapi from "@apicourse/fetchapi";
import Workshopapi from "@apicourse/workshopapi";
import Navmenu from "@routes/navroute";
import Pokemon from "@pokemon/Homepokemon";
import Detailpokemon from "@pokemon/Detailpokemon";
import Home from "@workshoppokemon/Home";
import Detail from "@workshoppokemon/Detail";
import Homequiz from "@quiz/Homequiz";
import Quiz from "@quiz/Quiz";
import Score from "@quiz/Score";
import Evaluate from "@quiz/Evaluate";
import Navbar from "@quiz/nav"

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/menu",
    element: <Navmenu />,
  },
  {
    path: "/css",
    element: <Modulecss />,
  },
  {
    path: "/workshop",
    element: <Workshop />,
  },
  {
    path: "/visa1",
    element: <VisaPage1 />,
  },
  {
    path: "/visa2",
    element: <VisaPage2 />,
  },
  {
    path: "/tailwindfront",
    element: <Workshop_tail />,
  },
  {
    path: "/tailwindback",
    element: <Workshop_back />,
  },
  {
    path: "/workshopant",
    element: <Workshop_ant />,
  },
  {
    path: "/count",
    element: <Counter />,
  },
  {
    path: "/regisredux",
    element: <Regisredux />,
  },
  {
    path: "/api",
    element: <Fetchapi />,
  },
  {
    path: "/workshopapi",
    element: <Workshopapi />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/pokemon/:no",
    element: <Detailpokemon />,
  },
  {
    path: "/pokemon/pokemon-list",
    element: <Home />,
  },
  {
    path: "/pokemon/pokemon-list/*",
    loader: () => {
      window.location.href = "/pokemon/pokemon-list";
      return 0;
    },
  },
  {
    path: "/pokemon/detail/:name_pokemon",
    element: <Detail />,
  },
  {
    path: "/home",
    element: <LayoutHome />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "allnew",
        element: <AllNew />,
      },
      {
        path: "allnew/:typeName",
        element: <AllNew />,
      },
      {
        path: "detail/:typeName/:id",
        element: <DetailNew />,
      },
    ],
  },
    {
    path: "/homequiz",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Homequiz />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "score",
        element: <Score />,
      },
      {
        path: "evaluate",
        element: <Evaluate />,
      },
    ],
  },  
],{basename:"/workshop"});

export default route;
