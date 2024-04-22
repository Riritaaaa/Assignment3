import im from "@assets/tom-barrett-M0AWNxnLaMw-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Workshop_back = () => {
  return (
    <>
      <div className="m-auto h-screen bg-slate-600 flex">
        <div className=" m-auto w-[310px] h-[480px] bg-blue-950 shadow-lg shadow-slate-500 flex flex-col rounded-3xl transition-all justify-center lg:w-[500px] lg:h-[280px]  lg:flex lg:flex-row-reverse items-center lg:justify-evenly ">
          <div className="lg:h-full lg:w-auto w-full flex items-center justify-center relative">
            <div className="absolute w-1/3 h-[100px] bg-gradient-to-r from-sky-400 from-1% to-blue-900 to-60% left-0 lg:bg-gradient-to-b lg:w-[100px] lg:h-2/6 lg:top-0 lg:left-auto"></div>
            <img
              className="z-50 border-solid border-4 border-white w-[190px] h-[190px] rounded-full m-auto mb-[15px] lg:m-0"
              src={im}
            ></img>
            <div className="lg:bg-gradient-to-t from-sky-400 from-1% to-blue-900 to-60% lg:w-[100px] lg:h-2/6 absolute lg:bottom-0 w-1/3 h-[100px] bg-gradient-to-l right-0 lg:right-auto"></div>
          </div>

          <div className=" flex flex-col lg:pl-3 text-white">
            <p className="text-lg text-center font-semibold lg:text-left">
            <span className="text-sky-400">Rita</span> Chimnoi (Rita)
            </p>
            <p className="mb-[12px] text-center font-light text-sm lg:text-left">
              Computer Science
            </p>
            <div className="flex mb-[12px] lg:ml-0">
              <FontAwesomeIcon
                className="border-solid border-[2px] border-white bg-gradient-to-t from-sky-400 from-1% to-blue-900 to-60% rounded-full p-[6px] mr-3 self-center w-[12px] h-[12px]"
                icon={faPhone}
              />
              <div className="flex flex-col text-xs">
                <p>Phone</p>
                <p>095-138-3141</p>
                <div className="flex w-full">
                    <div className="border-b-[3px] border-sky-400 w-[50%]"></div>
                    <div className="border-b-[3px] border-white w-[50%]"></div>
                </div>
              </div>
            </div>
            <div className="flex mb-[12px] text-white lg:ml-0">
              <FontAwesomeIcon
                  className="border-solid border-[2px] border-white bg-gradient-to-t from-sky-400 from-1% to-blue-900 to-60% rounded-full p-[6px] mr-3 self-center w-[12px] h-[12px]"
                icon={faEnvelope}
              />
              <div className="flex flex-col text-xs ">
                <p>Email</p>
                <p>rita_ch@kkumail.com</p>
                <div className="flex w-full">
                    <div className="border-b-[3px] border-sky-400 w-[50%]"></div>
                    <div className="border-b-[3px] border-white w-[50%]"></div>
                </div>
              </div>
            </div>
            <div className="flex mb-[12px] lg:ml-0">
              <FontAwesomeIcon
                className="border-solid border-[2px] border-white bg-gradient-to-t from-sky-400 from-1% to-blue-900 to-60% rounded-full p-[6px] mr-3 self-center w-[12px] h-[12px]"
                icon={faLocationDot}
              />
              <div className="flex flex-col text-xs ">
                <p>Location</p>
                <p>ชั้นปีที่ 3 วิทยาลัยการคอมพิวเตอร์</p>
                <div className="flex w-full">
                    <div className="border-b-[3px] border-sky-400 w-[50%]"></div>
                    <div className="border-b-[3px] border-white w-[50%]"></div>
                </div>
              </div>
            </div>
            <div className="flex lg:ml-0 ">
              <FontAwesomeIcon
                  className="border-solid border-[2px] border-white bg-gradient-to-t from-sky-400 from-1% to-blue-900 to-60% rounded-full p-[6px] mr-3 self-center w-[12px] h-[12px]"
                icon={faGlobe}
              />
              <div className="flex flex-col text-xs ">
                <p>Website</p>
                <Link to="https://computing.kku.ac.th/index">
                  <p>www.computing.kku.ac.th/</p>
                </Link>
                <div className="flex w-full">
                    <div className="border-b-[3px] border-sky-400 w-[50%]"></div>
                    <div className="border-b-[3px] border-white w-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshop_back;
