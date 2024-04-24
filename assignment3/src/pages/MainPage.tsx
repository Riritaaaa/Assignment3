import React from "react";
import { useNavigate } from "react-router-dom";
import image from "@assets/image2.png";
import "@pages/App.css"
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="containerm">
      <img className="main" src={image} alt="Image" />
      <h2 className="text-xl font-medium mt-9">ogs Daily News</h2>
      <button className="mt-5 button" onClick={() => navigate("/home")}>เข้าสู่เว็บไซต์</button>
    </div>
  );
};

export default MainPage;
