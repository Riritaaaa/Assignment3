import React from "react";
import heart from "@assets/heart.png";
import sword from "@assets/swords.png";
import shield from "@assets/shield.png";
import shoe from "@assets/boot.png";
import star from "@assets/star.png";
import fire from "@assets/fire.png";
import { Skeleton } from "antd";
import { StatPokemon, TypePokemon } from "./Homepokemon";

type props = {
  name?: string;
  isLoading?: boolean;
  stats?: StatPokemon;
  type?: TypePokemon[];
  id?: string;
};

export const Cardpokemon: React.FC<props> = ({
  isLoading = false,
  name,
  stats,
  type,
  id = "000",
}) => {
  return (
    <div>
      {!isLoading ? (
        <div className="select-none w-[210px] h-[275px] rounded-md relative bg-red-200 border-[10px] border-black box-border">
          <img
            className="w-40 h-45 m-auto pt-5 absolute left-0 right-0 z-10"
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`}
          />

          <div
            className="absolute right-3 top-3 p-1 rounded z-20"
            style={{ backgroundColor: "rgba(34, 34, 34,0.85)" }}
          >
            {type?.map((item) => {
              return (
                <img
                  className="w-5 h-5 mb-2"
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item.toLowerCase()}.png`}
                />
              );
            })}
          </div>

          <div className="bg-white rounded-md absolute bottom-0 w-full h-[100px]">
            <p className="bg-slate-400 w-fit m-auto font-bold text-white px-3 my-3 rounded-md">
              {name}
            </p>

            <div className="flex flex-row justify-evenly mb-10 ">
              <div className="flex flex-col items-center ">
                <img className="w-4 h-4 mb-1" src={heart}></img>
                <p>{stats?.hp}</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-4 h-4 mb-1" src={sword}></img>
                <p>{stats?.attack}</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-4 h-4 mb-1" src={shield}></img>
                <p>{stats?.defense}</p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-4 h-4 mb-1" src={shoe}></img>
                <p>{stats?.speed}</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-4 h-4 mb-1" src={star}></img>
                <p>{stats?.special}</p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-4 h-4 mb-1" src={fire}></img>
                <p>{stats?.total}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-[210px] h-[265px] rounded-md border-2 p-2 items-center">
          <Skeleton.Image
            active={true}
            style={{ width: "180px", height: "160px" }}
          />
          <Skeleton.Input
            className="mt-1"
            active={true}
            size="small"
            style={{ height: "20px" }}
          />
          <div className="flex flex-row justify-evenly mb-10 w-full mt-2">
            <div className="flex flex-col items-center ">
              <img className="w-4 h-4 mb-[6px]" src={heart}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center">
              <img className="w-4 h-4 mb-[6px]" src={sword}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center">
              <img className="w-4 h-4 mb-[6px]" src={shield}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center ">
              <img className="w-4 h-4 mb-[6px]" src={shoe}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center">
              <img className="w-4 h-4 mb-[6px]" src={star}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center ">
              <img className="w-4 h-4 mb-[6px]" src={fire}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cardpokemon;
