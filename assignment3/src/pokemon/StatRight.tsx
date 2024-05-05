import {
  ColorPokemon,
  StatPokemon,
  TypePokemon,
} from "@service/pokemonservicecyclic/pokemoncyclicresponse/PokemonCyclicResponse";
import React from "react";
import { Progress } from "antd";
type props = {
  stats: StatPokemon;
  type: TypePokemon[];
};
import "./pokemon.css";

const StatRight: React.FC<props> = ({ type, stats }) => {
  return (
    <div style={{ perspective: 500 }} className="mt-14">
      <div className="cardskew flex flex-col bg-[#f0f0f0] m-10 w-[320px] rounded-md p-3 cursor-pointer">
        <p className="font-extrabold text-2xl text-center mb-3">STATS</p>
        {type?.slice(0, 1).map((item) => (
          <div
            className="text-center rounded-full text-white w-[120px] h-[120px] p-2 m-auto"
            style={{
              backgroundColor: ColorPokemon[item],
              boxShadow: `0 0 10px ${ColorPokemon[item]}`,
            }}
          >
            <p>power</p>
            <p className="text-[40px] font-semibold mt-1">{stats.total}</p>
          </div>
        ))}
        <div className="flex flex-row my-2 mt-4 justify-center pr-4">
          <div className="flex flex-col items-end leading-8">
            <p>Hp</p>
            <p>Attack</p>
            <p>Defense</p>
            <p>Speed</p>
            <p>Special</p>
          </div>
          <div className="leading-8">
            <div className="flex">
              <Progress
                className="w-[160px] mx-3 leading-8"
                percent={stats.hp}
                showInfo={false}
                strokeColor={"#48C800"}
              />
              <p>{stats.hp}</p>
            </div>
            <div className="flex">
              <Progress
                className="w-[160px] mx-3 leading-8"
                percent={stats.attack}
                showInfo={false}
                strokeColor={"#FF6D6D"}
              />
              <p>{stats.attack}</p>
            </div>
            <div className="flex">
              <Progress
                className="w-[160px] mx-3 leading-8"
                percent={stats.defense}
                showInfo={false}
                strokeColor={"#6B98FF"}
              />
              <p>{stats.defense}</p>
            </div>
            <div className="flex">
              <Progress
                className="w-[160px] mx-3 leading-8"
                percent={stats.speed}
                showInfo={false}
                strokeColor={"#87CEEB"}
              />
              <p>{stats.speed}</p>
            </div>
            <div className="flex">
              <Progress
                className="w-[160px] mx-3 leading-8"
                percent={stats.special}
                showInfo={false}
                strokeColor={"#FFC0CB"}
              />
              <p>{stats.special}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatRight;

{
  /* <ul>
{Object.keys(stats)
  .slice(0, 5)
  .map((item) => {
    const status = stats[item as keyof StatPokemon];
    return (
      <div className="capitalize">
        {item} <Progress percent={status} showInfo={false} /> {status}
      </div>
    );
  })}

</ul> */
}
