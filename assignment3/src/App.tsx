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

/* import "./App.css"; */

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
        <Route path="/home" element={<LayoutHome/>} >
          <Route index element={<HomePage/>} />
          <Route path="allnew" element={<AllNew/>} />
          <Route path="allnew/:typeName" element={<AllNew/>} />
          <Route path="detail/:typeName/:id" element={<DetailNew/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
