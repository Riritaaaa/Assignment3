import { Route, Routes } from "react-router-dom";
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
import Counter from "./components/Counter";
import Regisredux from "@components/Workshop_redux";
import Fetchapi from "@apicourse/fetchapi";
import Workshopapi from "@apicourse/workshopapi";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/css" element={<Modulecss/>} />
        <Route path="/workshop" element={<Workshop/>} />
        <Route path="/visa1" element={<VisaPage1/>} />
        <Route path="/visa2" element={<VisaPage2/>} />
        <Route path="/tailwindfront" element={<Workshop_tail/>} />
        <Route path="/tailwindback" element={<Workshop_back/>} />
        <Route path="/workshopant" element={<Workshop_ant/>} />
        <Route path="/count" element={<Counter/>} />
        <Route path="/regisredux" element={<Regisredux/>} />
        <Route path="/api" element={<Fetchapi/>} />
        <Route path="/workshopapi" element={<Workshopapi/>} />
        <Route path="/home" element={<LayoutHome/>} >
          <Route index element={<HomePage/>} />
          <Route path="allnew" element={<AllNew/>} />
          <Route path="allnew/:typeName" element={<AllNew/>} />
          <Route path="detail/:typeName/:id" element={<DetailNew/>} />
        </Route>
      </Routes>
    {/*   <div className="custom-layout">
        <div className="main-layout">
          <h1>Vite + React + Redux</h1>
          <div className="card">
            <Counter></Counter>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div> */}
    </>
  );
}

export default App;
