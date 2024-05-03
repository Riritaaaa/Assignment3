import React from "react";
import { useGetPokemonByIDQuery } from "@service/pokemonservice/Pokemonservice";
import backicon from "@assets/backicon.svg";
import { useNavigate } from "react-router-dom";
type props = {
  name: string | undefined;
};

const CardDetail: React.FC<props> = ({ name }) => {
  const { data } = useGetPokemonByIDQuery(name || "");
  const navigate = useNavigate();
  return (
    <div className="select-none w-[400px] h-[620px] rounded-xl relative shadow-xl bg-[#70c16c]">
      <div className="flex justify-between px-5 ">
        <div className="pt-5">
          <img
            className="w-8 cursor-pointer"
            onClick={() => navigate(-1)}
            src={backicon}
          />
          <p className="capitalize text-white font-bold text-[32px] pt-2">
            {data?.Name}
          </p>
          <div className="flex flex-row">
            {data?.types.map((item) => {
              return (
                <div className="capitalize text-xs text-white w-fit bg-[#8dcd7d] px-3 rounded-full mr-2">
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-[80px] text-[#94d385] font-semibold">
            #{data?.id}
          </p>
        </div>
      </div>

      <img
        className="w-48 h-45 m-auto absolute top-[115px] left-0 right-0 z-10"
        src={data?.image.mainimg}
      />

      <div className="bg-white rounded-2xl rounded-b-xl absolute bottom-0 w-full h-[360px]">
        <div className="flex flex-row justify-center items-center mt-6">
          <img className="w-22" src={data?.image.front_img} />
          <img className="w-22" src={data?.image.back_img} />
          <img className="w-22" src={data?.image.shining_front_img} />
          <img className="w-22" src={data?.image.shining_back_img} />
        </div>
        <p className="bg-[#70c15c] w-fit rounded-full mx-5 text-white text-xs px-3 p-1 mb-4">
          Exp : {data?.base_experience}
        </p>
        <div className="text-[11px] bg-[#f0f0f0] text-[#767676] grid grid-cols-3 mx-5 my-3 rounded-lg h-12 p-2 pl-3">
          {data?.stats.map((item) => {
            return (
              <div className="list capitalize font-semibold ">
                {item.baseStats} : {item.name}
              </div>
            );
          })}
        </div>
        <p className="text-base ml-6 mb-1 text-[#767676] font-semibold">
          Abilities
        </p>

        <div className="text-xs text-[#767676] bg-[#f0f0f0] mx-5 font-semibold rounded-lg h-20 p-2 flex flex-row justify-between">
          <div>
            {data?.abilities.map((item, index) => {
              return (
                <div>
                  {index + 1}. {item}
                </div>
              );
            })}
          </div>

          <div className="bg-[#777777] h-16 w-1 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
