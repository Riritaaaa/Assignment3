import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cardpokemon from "./cardpokemon";
import "./pokemon.css";
import Container from "@components/Container";
import logopokemon from "@assets/d97gfvk-c4e26092-00c2-4835-8b04-97d417e05efd.png";
import { Divider, Input } from "antd";
import { Select } from "antd";
import { FloatButton } from "antd";

type Pokemon = {
  no: string;
  name: string;
  species: string;
  type: string[];
  stats: StatPokemon;
  sprite: {
    redblue: string;
    redgreen: string;
    yellow: string;
  };
};

export const ColorPokemon = {
  bug: "#729F3F",
  dragon: "rgb(241,110,87)",
  fire: "rgb(253,125,36)",
  ghost: "rgb(123,98,163)",
  ground: "rgb(171,152,66)",
  normal: "rgb(164,172,175)",
  psychic: "rgb(243,102,185)",
  electric: "rgb(238,213,53)",
  fighting: "rgb(213,103,35)",
  flying: "rgb(157, 225, 244)",
  grass: "rgb(155,204,80)",
  ice: "rgb(81,196,231)",
  poison: "rgb(185,127,201)",
  rock: "rgb(123, 103, 14)",
  water: "rgb(69,146,196)",
};

export type TypePokemon = keyof typeof ColorPokemon;

export type StatPokemon = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  special: number;
  total: number;
};

const { Search } = Input;

const Homepokemon = () => {
  const [data, setData] = useState<Pokemon[]>();
  const [isLoading, setIsloading] = useState(false);
  const [type, setType] = useState<TypePokemon | "">("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("Lowest");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const fetchData = async (sort: string) => {
    setIsloading(true);
    let url = "https://pokemon-api.cyclic.app/api/v1/pokemon";

    let params = new URLSearchParams({
      type,
    });

    try {
      if (type) {
        url = url + "?" + params.toString();
      }
      const response = await axios.get(url);

      let sortedData: Pokemon[] = response.data.data.data;

      if (sort === "Highest") {
        sortedData.sort((a, b) => parseInt(b.no) - parseInt(a.no));
      } else if (sort === "Lowest") {
        sortedData.sort((a, b) => parseInt(a.no) - parseInt(b.no));
      } else if (sort === "A-Z") {
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sort === "Z-A") {
        sortedData.sort((a, b) => b.name.localeCompare(a.name));
      }

      setData(response.data.data.data);
      console.log(response);
    } catch (error) {
      console.error("There was a problem with the fetch operation", error);
    }
    setIsloading(false);
  };

  useEffect(() => {
    fetchData(selectedSort);
  }, [type, selectedSort]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  const handleChange = (value: string) => {
    setSelectedSort(value);
  };

  return (
    <>
      <Container className="containerpo">
        <img src={logopokemon} className="w-[500px] m-auto mb-6" />

        <div className="w-fit h-fit bg-white m-auto p-5 rounded-lg mb-8">
          <div className="flex flex-row justify-between">
            <Search
              placeholder="Search..."
              allowClear  
              onSearch={handleSearch}
              onChange={(e)=>{
                setSearchTerm(e.target.value)
              }}
              style={{ width: 230 }}
              className="rounded-full"
            />
            <Select
              defaultValue={selectedSort}
              style={{ width: 180 }}
              onChange={handleChange}
              options={[
                {
                  value: "Lowest",
                  label: "Lowest Number (First)",
                },
                {
                  value: "Highest",
                  label: "Highest Number (First)",
                },
                {
                  value: "A-Z",
                  label: "A-Z",
                },
                {
                  value: "Z-A",
                  label: "Z-A",
                },
              ]}
            />
          </div>

          <Divider />
          <div className="grid grid-cols-4 gap-2 uppercase font-semibold">
            {Object.keys(ColorPokemon).map((item) => {
              return (
                <div
                  className="buttontype"
                  onClick={() => {
                    if (item === type) {
                      setType("");
                    } else {
                      setType(item as TypePokemon);
                    }
                  }}
                  style={{
                    backgroundColor:
                      type === item
                        ? ColorPokemon[item as TypePokemon]
                        : "white",
                  }}
                >
                  {item}
                </div>
              );
            })}
            <div className="buttontype" onClick={() => setType("")}>
              clear
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {isLoading ? (
            <div className="grid gap-12 grid-cols-5 select-none">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <Cardpokemon isLoading={true} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              {data ? (
                <>
                  <div className="grid gap-12 grid-cols-5 gap-y-8">
                    {data
                      .filter((item) =>
                        item.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((item, index) => {
                        return (
                          <div className="clickcard cursor-pointer">
                            <Cardpokemon
                              name={item.name}
                              key={index}
                              isLoading={false}
                              id={item.no}
                              stats={item.stats}
                              type={item.type.map(
                                (type) => type as TypePokemon
                              )}
                              index={index}
                            />
                          </div>
                        );
                      })}
                  </div>
                </>
              ) : (
                <div>ไม่มีข้อมูล</div>
              )}
            </div>
          )}
        </div>
        <FloatButton.BackTop />
      </Container>
    </>
  );
};

export default Homepokemon;
