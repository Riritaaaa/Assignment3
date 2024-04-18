import React from "react";
import { useNavigate } from "react-router-dom";
import imagenot from "@assets/Group1.png";
import "@pages/App.css"
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="containerr">
      <img className="not" src={imagenot} alt="Image" />

      <button className="button" onClick={() => navigate("/home")}>กลับสู่หน้าหลัก</button>
    </div>
  );
};

export default NotFound;
