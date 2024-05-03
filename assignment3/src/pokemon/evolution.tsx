import React from "react";
import { StatPokemon, TypePokemon, ColorPokemon } from "./Homepokemon";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "@components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import EvolutionStage from "./Detailpokemon"

type props = {
  name?: string;
  isLoading?: boolean;
  stats?: StatPokemon;
  type?: TypePokemon[];
  id?: string;
  index?: number;
};

export const evolution: React.FC<props> = ({
  name,
  stats,
  type,
  id = "000",
}) => {
  return (
    <div className="flex flex-row justify-between ">
      <div className="select-none w-[180px] h-[245px] rounded-lg box-border bg-red-500">
        <div>
          <img
            className="w-[130px] m-auto pt-4 z-10"
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png`}
          />
          <p className="text-center my-1">#004</p>

          <p className="bg-slate-400 w-fit m-auto font-extrabold text-white px-3 my-1 rounded-md uppercase ">
            Bul
          </p>

          <div className="my-3">
            {type?.map((item) => {
              return (
                <div
                  className="typecir rounded-full p-[7px] my-1 mx-[2px]"
                  style={{ backgroundColor: ColorPokemon[item] }}
                >
                  <img
                    className="w-4 h-4"
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item.toLowerCase()}.png`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col self-center">
        <p className="mb-3">levelup</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>

      <div className="select-none w-[180px] h-[245px] rounded-lg box-border bg-red-500">
        <div>
          <img
            className="w-[130px] m-auto pt-4 z-10"
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png`}
          />
          <p className="text-center my-1">#004</p>

          <p className="bg-slate-400 w-fit m-auto font-extrabold text-white px-3 my-1 rounded-md uppercase ">
            Bul
          </p>

          <div className="my-3">
            {type?.map((item) => {
              return (
                <div
                  className="typecir rounded-full p-[7px] my-1 mx-[2px]"
                  style={{ backgroundColor: ColorPokemon[item] }}
                >
                  <img
                    className="w-4 h-4"
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item.toLowerCase()}.png`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col self-center">
        <p className="mb-3">levelup</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="select-none w-[180px] h-[245px] rounded-lg box-border bg-red-500">
        <div>
          <img
            className="w-[130px] m-auto pt-4 z-10"
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png`}
          />
          <p className="text-center my-1">#004</p>

          <p className="bg-slate-400 w-fit m-auto font-extrabold text-white px-3 my-1 rounded-md uppercase ">
            Bul
          </p>

          <div className="my-3">
            {type?.map((item) => {
              return (
                <div
                  className="typecir rounded-full p-[7px] my-1 mx-[2px]"
                  style={{ backgroundColor: ColorPokemon[item] }}
                >
                  <img
                    className="w-4 h-4"
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item.toLowerCase()}.png`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default evolution;
