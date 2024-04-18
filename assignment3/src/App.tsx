import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import AllNew from "@pages/AllNew";
import DetailNew from "@pages/DetailNew";
import MainPage from "@pages/MainPage";
import NotFound from "@pages/NotFound";
import LayoutHome from "@components/LayoutHome";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="*" element={<NotFound />} />
    
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
