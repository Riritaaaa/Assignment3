import axios from "axios";
import { useState, useEffect, useRef } from "react";
import "./api.css";
import { Divider, Modal, Spin, Input, FloatButton } from "antd";
import dis from "@assets/logodisney.png";
import mickey from "@assets/mickey.png";
import { motion, useInView } from "framer-motion";
import { SmileOutlined } from "@ant-design/icons";

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

const { Search } = Input;

const workshopapi = () => {
  const [data, setData] = useState<disney>();
  const [des, setDes] = useState<disneyCharacter>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    console.log(isInView, "isInView");
  }, [isInView]);

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

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <div className="containerapi bg-gradient-to-r from-indigo-950 to-indigo-800 h-full py-8 min-h-screen">
        <div className="backim min-h-screen">
          <img
            className="w-[250px] m-auto py-5 pb-8"
            src={dis}
            alt="Disney Logo"
          />

          <Modal
            className="containerapi border-solid"
            open={isModalOpen}
            onOk={handleOk}
            width={500}
            onCancel={handleCancel}
            footer={null}
          >
            <div className="flex flex-row">
              <img
                className="w-[30px] self-center mr-1"
                src={mickey}
                alt="Mickey Mouse"
              />
              <p className="text-xl font-bold">{des?.name}</p>
            </div>

            <Divider className="my-2 mb-4" />
            <div>
              <img
                className="m-auto w-4/6 rounded-lg mb-5"
                src={des?.imageUrl}
                alt={des?.name}
              />
            </div>
            <div>
              <p className="mb-2 text-base ml-8">
                Films :{" "}
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
              />
            </div>
          ) : (
            <>
              {data ? (
                <div className="flex flex-col px-24">
                  <div className="flex lg:flex-row justify-between flex-col my-1">
                    <p className="text-white lg:ml-14 lg:mb-0 text-lg mb-4 text-center">
                      Show{" "}
                      {
                        data.data
                          .filter((item) =>
                            item.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          )
                          .filter((item) => !item.name.startsWith("I"))
                          .filter((item) => !item.name.startsWith("Athena"))
                          .filter(
                            (item) => !item.name.startsWith("Beheaded Knight")
                          )
                          .filter((item) => !item.name.startsWith("Aqua"))
                          .filter((item) => item.imageUrl).length
                      }{" "}
                      of{" "}
                      {
                        data.data
                          .filter((item) => !item.name.startsWith("I"))
                          .filter((item) => !item.name.startsWith("Athena"))
                          .filter(
                            (item) => !item.name.startsWith("Beheaded Knight")
                          )
                          .filter((item) => !item.name.startsWith("Aqua"))
                          .filter((item) => item.imageUrl).length
                      }
                    </p>
                    <Search
                      placeholder="Search..."
                      allowClear
                      onSearch={handleSearch}
                      style={{ width: 230 }}
                      className="rounded-full m-auto lg:mr-14"
                    />
                  </div>

                  <div className="flex flex-row flex-wrap items-center mt-3 justify-center">
                    {data.data
                      .filter((item) =>
                        item.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .filter((item) => !item.name.startsWith("I"))
                      .filter((item) => !item.name.startsWith("Athena"))
                      .filter(
                        (item) => !item.name.startsWith("Beheaded Knight")
                      )
                      .filter((item) => !item.name.startsWith("Aqua"))
                      .filter((item) => item.imageUrl)
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item, index) => {
                        return (
                          <motion.div
                            className="flex flex-row flex-wrap justify-center items-center"
                            variants={{
                              hidden: {
                                opacity: 0,
                                y: 50,
                              },
                              visible: {
                                opacity: 1,
                                y: 0,
                              },
                            }}
                            transition={{
                              type: "spring",
                              delay: 0.5 + index * 0.04,
                            }}
                            initial="hidden"
                            animate="visible"
                            key={item._id}
                          >
                            <div
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
                          </motion.div>
                        );
                      })}
                  </div>
                </div>
              ) : (
                <div className="text-white text-center text-lg mt-[180px]">
                  <div>
                    <SmileOutlined style={{ fontSize: 40 }} />
                    <p className="mt-2">No Data</p>
                  </div>
                </div>
              )}
            </>
          )}
          <FloatButton.BackTop />
        </div>
      </div>
    </>
  );
};
export default workshopapi;
