import axios from "axios";
import { useState, useEffect } from "react";
import "./api.css";
import { Divider, Modal } from "antd";
import { FloatButton } from "antd";
import dis from "@assets/disney.png";
import mickey from "@assets/mickey.png";
import { Spin } from "antd";
import { motion, Variants } from "framer-motion";

type disney = {
  info: {
    count: number;
    totalPages: number;
    previousPage: string | null;
    nextPage: string | null;
  };
  data: disneyCharacter[];
};

type disneyCharacter = {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
};
const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const workshopapi = () => {
  const [data, setData] = useState<disney>();
  const [des, setDes] = useState<disneyCharacter>();
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const disneyData = () => {
    axios
      .get("https://api.disneyapi.dev/character")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was problem with the fetch operation", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    disneyData();
  }, []);

  return (
    <>
      <div className="containerapi bg-gradient-to-r from-indigo-950 to-indigo-800 h-full py-8 min-h-screen">
        <div className="backim">
          <img className="w-[250px] m-auto my-5" src={dis}></img>

          <Modal
            className="containerapi border-solid"
            open={isModalOpen}
            onOk={handleOk}
            width={500}
            onCancel={handleCancel}
            footer={null}
          >
            <div className="flex flex-row">
              <img className="w-[30px] self-center mr-1" src={mickey}></img>
              <p className="text-xl font-bold">{des?.name}</p>
            </div>

            <Divider className="my-2 mb-4" />
            <div>
              <img
                className="m-auto w-4/6 rounded-lg mb-5"
                src={des?.imageUrl}
              ></img>
            </div>
            <div>
              <p className="mb-2 text-base ml-8">
                Films :
                {des?.films.slice(0, 1).length ? des.films.slice(0, 1) : "-"}
              </p>
              <p className="mb-2 text-base ml-8">
                Tv Shows : {des?.tvShows.length ? des.tvShows.slice(0, 1) : "-"}
              </p>
              <p className="mb-2 text-base ml-8">
                Video games :{" "}
                {des?.videoGames.length ? des.videoGames.slice(0, 1) : "-"}
              </p>
            </div>
          </Modal>
          {isLoading ? (
            <div className="text-white">
              <Spin
                tip="Loading"
                size="large"
                fullscreen
                className="text-white font-semibold"
              ></Spin>
            </div>
          ) : (
            <>
              {data ? (
                <motion.div
                  className="flex flex-row flex-wrap justify-center items-center"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex flex-row flex-wrap justify-center items-center">
                    {data.data.slice(0, 35).map((item) => {
                      if (
                        item.films.length === 0 &&
                        item.tvShows.length === 0
                      ) {
                        return null;
                      }
                      return (
                        <div
                          // className="cardapi m-5 mx-8 bg-white w-1/6 h-[300px] rounded-lg items-center flex flex-col "
                          className="cardapi m-5 mx-8 bg-white rounded-lg items-center flex flex-col shadow-lg shadow-gray-500  "
                          onClick={() => {
                            setDes(item);
                            showModal();
                          }}
                        >
                          <div
                            className="w-[250px] h-[235px] rounded-lg m-1 text-center font-semibold text-lg "
                            style={{
                              backgroundImage: `url('${item.imageUrl}')`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              color: "white",
                            }}
                          >
                            <div className="cname flex justify-center h-[235px] items-end">
                              <div className="itemname">{item.name}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>{" "}
                </motion.div>
              ) : (
                <div>ไม่มีข้อมูล</div>
              )}{" "}
            </>
          )}

          <FloatButton.BackTop />
        </div>
      </div>
    </>
  );
};
export default workshopapi;
