import logo from "@assets/logocp.png";
import im from "@assets/tom-barrett-M0AWNxnLaMw-unsplash.jpg";
import { Link } from "react-router-dom";

const Workshop_tail = () => {
  return (
    <>
      <div className="h-screen bg-slate-600 flex justify-center items-center">
        <div className="m-auto w-[310px] h-[480px] bg-blue-950 shadow-lg shadow-slate-500 flex flex-col rounded-3xl transition-all justify-center lg:w-[500px] lg:h-[280px] lg:flex-row lg:flex items-center lg:justify-evenly">
          <div className="lg:h-full lg:w-1/2 w-full flex items-center justify-center relative">
            <div className="absolute w-1/3 h-[100px] bg-gradient-to-r from-sky-400 from-1% to-blue-900 to-50% left-0 lg:bg-gradient-to-b lg:w-[100px] lg:h-2/6 lg:top-0 lg:left-auto"></div>

            <img
              className="z-50 border-solid border-4 border-white w-[210px] h-[210px] rounded-full m-auto mb-[15px] lg:m-0"
              src={im}
            ></img>

            <div className="lg:bg-gradient-to-t from-sky-400 from-1% to-blue-900 to-50% lg:w-[100px] lg:h-2/6 absolute lg:bottom-0 w-1/3 h-[100px] bg-gradient-to-l right-0 lg:right-auto"></div>
          </div>

          <div className="items-center flex flex-col lg:flex lg:flex-col lg:pr-[20px] ">
            <img
              className="w-[150px] h-[45px] m-auto mb-[20px]"
              src={logo}
            ></img>
            <p className="text-white text-xl font-bold">
              CP <span className="text-sky-500 font-bold">KKU</span>
            </p>
            <p className="text-white mb-[25px]">Computer Science</p>
            <Link to="/tailwindback">
              <p className="text-sky-600 font-medium text-base px-[15px] py-[5px] bg-white rounded-full border-2 border-white hover:bg-gradient-to-r from-sky-400 to-blue-500 transition-all hover:text-white">
                Rita Chimnoi
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshop_tail;
