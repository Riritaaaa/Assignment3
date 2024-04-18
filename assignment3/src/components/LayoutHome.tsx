import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "@assets/react.svg";
import "@pages/App.css"

const LayoutHome: React.FC = () => {
  const [clickedLink, setClickedLink] = useState("");

  const handleLinkClick = (linkName: string) => {
    setClickedLink(linkName);
  };

  return (
    <div className="containerr">
      <nav>
        <ul className="home">
          <li className="lo">
            <Link to="/">
              <img className="logo w-9" src={logo} alt="Image" />
            </Link>
          </li>
          <li>
            <Link
              to="/home"
              style={{
                backgroundColor : clickedLink === "home" ? "white" : "#7b8c86",
                color : clickedLink === "home" ? "#7b8c86" : "white", 
              }}
              onClick={() => handleLinkClick("home")}
            >
              หน้าหลัก
            </Link>
          </li>
          <li>
            <Link
              to="/home/allnew"
              style={{
                backgroundColor : clickedLink === "allnews" ? "white" : "#7b8c86",
                color : clickedLink === "allnews" ? "#7b8c86" : "white", 
              }}
              onClick={() => handleLinkClick("allnews")}
            >
              ข่าวทั้งหมด
            </Link>
          </li>
          <li>
            <Link
              to="/home/allnew/ข่าวกีฬา"
              style={{
                backgroundColor : clickedLink === "sports" ? "white" : "#7b8c86",
                color : clickedLink === "sports" ? "#7b8c86" : "white", 
              }}
              onClick={() => handleLinkClick("sports")}
            >
              ข่าวกีฬา
            </Link>
          </li>
          <li>
            <Link
              to="/home/allnew/ข่าวการเมือง"
              style={{
                backgroundColor : clickedLink === "politics" ? "white" : "#7b8c86",
                color : clickedLink === "politics" ? "#7b8c86" : "white", 
              }}
              onClick={() => handleLinkClick("politics")}
            >
              ข่าวการเมือง
            </Link>
          </li>
          <li>
            <Link
              to="/home/allnew/ข่าวดารา"
              style={{
                backgroundColor : clickedLink === "celebrities" ? "white" : "#7b8c86",
                color : clickedLink === "celebrities" ? "#7b8c86" : "white", 
              }}
              onClick={() => handleLinkClick("celebrities")}
            >
              ข่าวดารา
            </Link>
          </li>
          <li>
            <Link
              to="/home/allnew/ข่าวทั่วไป"
              style={{
                backgroundColor : clickedLink === "general" ? "white" : "#7b8c86",
                color : clickedLink === "general" ? "#7b8c86" : "white", 
              }}
              onClick={() => handleLinkClick("general")}
            >
              ข่าวทั่วไป
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default LayoutHome;
