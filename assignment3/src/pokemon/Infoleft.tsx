import {
  ColorPokemon,
  TypeMove,
  TypePokemon,
} from "@service/pokemonservicecyclic/pokemoncyclicresponse/PokemonCyclicResponse";
import React from "react";

type props = {
  species: string;
  moves: {
    move: string;
    type: TypeMove[];
  }[];
  name: string;
  no: number | string;
  type: TypePokemon[];
};

const Infoleft: React.FC<props> = ({ species, moves = [], name, type, no }) => {
  return (

    <div className="dcard">
    <div className="trigger"></div>
    <div className="trigger"></div>
    <div className="trigger"></div>
    <div className="trigger"></div>
    <div className="trigger"></div>
    <div className="trigger"></div>
    <div className="trigger"></div>
    <div className="trigger"></div>
    <div className="trigger"></div>
   
    <div className="paracard">

      <div className=" cardskew2 flex flex-col bg-[#f0f0f0] m-10 w-[320px] rounded-md p-3">
        <p className="font-extrabold text-2xl text-center mb-3">INFO.</p>
        {type?.slice(0, 1).map((item) => (
          <div className="flex flex-row">
            <div className=" text-right mr-4 ml-2 font-bold leading-8">
              <p>No</p>
              <p>Name</p>
              <p>Species</p>
              <p className="mt-1">Type</p>
              <p className="mt-3">Abilities</p>
            </div>
            <div className="font-semibold capitalize leading-8">
              <p>{no}</p>
              <p>{name}</p>
              <p>{species}</p>
              <div className="flex flex-row items-center self-center mb-4 mt-2">
                {type?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded flex py-1 px-3 mr-2"
                      style={{
                        backgroundColor: ColorPokemon[item],
                        boxShadow: `0 0 10px ${ColorPokemon[item]}`,
                      }}
                    >
                      <img
                        className="w-[16px] h-[16px] self-center mr-1"
                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item.toLowerCase()}.png`}
                      />
                      <p className="text-white text-sm">{item}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row flex-wrap mb-1">
                {moves?.slice(0, 5).map((item) => {
                  const color =
                    ColorPokemon[item.type as unknown as TypePokemon];
                  return (
                    <div
                      className="rounded flex py-1 px-[10px] mr-2 mb-2"
                      style={{
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}`,
                      }}
                    >
                      <img
                        className="w-[16px] h-[16px] self-center mr-1"
                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item.type}.png`}
                      />
                      <p className="text-sm text-white">{item.move}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Infoleft;
