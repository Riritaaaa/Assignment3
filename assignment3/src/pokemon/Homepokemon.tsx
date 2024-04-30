import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardpokemon from "./cardpokemon";

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
  Bug: ["#729F3F"],
  Dargon: ["rgb(241,110,87)", "rgb(83,164,207)"],
  Fairy: ["#FDB9E9"],
  Fire: ["rgb(253,125,36)"],
  Ghost: ["rgb(123,98,163)"],
  Ground: ["rgb(247,222,63)", "rgb(171,152,66)"],
  Normal: ["rgb(164,172,175)"],
  Psychic: ["rgb(243,102,185)"],
  Steel: ["rgb(158,183,184)"],
  Dark: ["rgb(112,112,112)"],
  Electric: ["rgb(238,213,53)"],
  Fighting: ["rgb(213,103,35)"],
  Flying: ["rgb(61,199,239)", "rgb(189,185,184)"],
  Grass: ["rgb(155,204,80)"],
  Ice: ["rgb(81,196,231)"],
  Poison: ["rgb(185,127,201)"],
  Rock: ["rgb(163,140,33)"],
  Water: ["rgb(69,146,196)"],
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

const Homepokemon = () => {
  const [data, setData] = useState<Pokemon[]>();

  const fetchData = () => {
    axios
      .get("https://pokemon-api.cyclic.app/api/v1/pokemon")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {data ? (
          <div className="text-center">
            <p>
              {data.map((item, index) => {
                return (
                  <div className="mb-3">
                    ชื่อ : {item.name} <br></br>
                  </div>
                );
              })}
            </p>
          </div>
        ) : (
          <div>ไม่มีข้อมูล</div>
        )}
      </div>
    </>
  );
};

export default Homepokemon;

{
  /* <div className="mx-12">
<div className="grid gap-4 grid-cols-5">
  <p className="bg-red-400">1</p>
  <p className="bg-red-400">2</p>
  <p className="bg-red-400">3</p>
  <p className="bg-red-400">4</p>
  <p className="bg-red-400">5</p>
</div>
</div> */
}

{
  /* <div>
      
        <Cardpokemon
          name="balbasaur"
          isLoading={false}
          id={"001"}
          stats={{
            attack: 400,
            defense: 500,
            hp: 20,
            special: 10,
            speed: 100,
            total: 100,
          }}
          type={["Fire", "Bug"]}
        />

        {data.length > 0 ? (
          <div className="text-center">
            {data.map((data, index) => (
              <div key={index} className="mb-3">
                <p>ชื่อ : {data.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>ไม่มีข้อมูล</div>
        )}
      </div> */
}
