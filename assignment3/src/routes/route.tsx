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
import Cardpokemon from "@pokemon/cardpokemon";
import Infoleft from "@pokemon/Infoleft";

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
    path: "/cardpokemon",
    element: <Cardpokemon />,
  },
  {
    path: "/infopokemon",
    element: <Infoleft />,
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
]);

export default route;
