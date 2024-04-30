import { Route, Routes } from "react-router-dom";
import Workshopapi from "@apicourse/workshopapi";
import Router from "@routes/route"
import { RouterProvider } from "react-router-dom";

function App() {
  
  return (
    <>
    <RouterProvider router={Router}/>

     {/*  <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<LayoutHome/>} >
          <Route index element={<HomePage/>} />
          <Route path="allnew" element={<AllNew/>} />
          <Route path="allnew/:typeName" element={<AllNew/>} />
          <Route path="detail/:typeName/:id" element={<DetailNew/>} />
        </Route>
      </Routes> */}

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
