import React from "react";
import { useNavigate } from "react-router-dom";
import imagenot from "@assets/Group1.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <img className="not" src={imagenot} alt="Image" />

      <button onClick={() => navigate("/home")}>กลับสู่หน้าหลัก</button>
    </>
  );
};

export default NotFound;
