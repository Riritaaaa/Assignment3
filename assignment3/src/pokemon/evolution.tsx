import React, { useState } from "react";
import {
  ColorPokemon,
  TypePokemon,
  useDataPokemonDetail,
} from "@service/pokemonservicecyclic/pokemoncyclicresponse/PokemonCyclicResponse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLazyGetPokemonCyclicByIDQuery } from "@service/pokemonservicecyclic/PokemonCyclicService";
import { Skeleton } from "antd";

type props = {
  species: string;
  no: number | string;
  evolution: {
    method: string;
    no: string;
    name: string;
  }[];
  type: TypePokemon[];
};

const Evolution: React.FC<props> = ({ species, type, no, evolution = [] }) => {
  const [getPokemon] = useLazyGetPokemonCyclicByIDQuery();
  const [evolData, setEvolData] = useState<useDataPokemonDetail[]>([]);
  const [isLoading, setisLoading] = useState(true);

  const fnGetEvolPokemon = async () => {
    let response = [];
    setisLoading(true);
    try {
      for (const element of evolution) {
        const result = await getPokemon(element.no).unwrap();
        response.push(result);
      }
    } catch (error) {
      console.log({ error });
    }
    setEvolData(response);
    setisLoading(false);
  };

  React.useEffect(() => {
    fnGetEvolPokemon();
  }, [evolution]);

  return (
    <>
      {type?.slice(0, 1).map((item) => (
        <div className="my-10">
          <p
            id="test"
            className="text-white m-auto my-5 text-xl font-semibold w-fit py-1 px-3 rounded-md mb-10"
            style={{
              backgroundColor: ColorPokemon[item],
              boxShadow: `0 0 10px ${ColorPokemon[item]}`,
            }}
          >
            EVOLUTION CHAIN
          </p>
          <div className="flex flex-row mb-8 justify-evenly px-8">
            {evolData.map((evol, indexEvol) => {
              if (!isLoading) {
                return (
                  <>
                    {evolution[indexEvol]?.method && (
                      <div className="flex flex-col items-center self-center">
                        {evolution[indexEvol].method}
                        <FontAwesomeIcon className="mt-5" icon={faArrowRight} />
                      </div>
                    )}
                    {type?.slice(0, 1).map((item) => (
                      <div>
                        <div
                          className="select-none w-[220px] h-fit rounded-lg relative shadow-xl bg-[#f0f0f0] flex flex-col justify-center items-center py-3"
                          style={{
                            boxShadow:
                              no.toString() === evol.no
                                ? `0 0 10px ${ColorPokemon[item]}`
                                : "",
                          }}
                        >
                          <img
                            className="w-28 m-auto"
                            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${evol.no}.png`}
                          />
                          <p className="text-[#8f8f8f] font-semibold my-3">
                            #{evol.no}
                          </p>
                          <p
                            className="capitalize p-1 px-3 rounded text-white mb-5"
                            style={{
                              backgroundColor: ColorPokemon[item],
                              boxShadow: `0 0 10px ${ColorPokemon[item]}`,
                            }}
                          >
                            {evol.species} Pokémon
                          </p>
                          <div className="flex flex-row justify-center items-center self-center mb-2">
                            {evol.type?.map((typeEvol, index) => {
                              return (
                                <div
                                  key={index}
                                  className="rounded-full p-[7px] mx-[5px]"
                                  style={{
                                    backgroundColor:
                                      ColorPokemon[
                                        typeEvol as unknown as TypePokemon
                                      ],
                                    boxShadow: `0 0 10px ${
                                      ColorPokemon[
                                        typeEvol as unknown as TypePokemon
                                      ]
                                    }`,
                                  }}
                                >
                                  <img
                                    className="w-4 h-4"
                                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${typeEvol.toLowerCase()}.png`}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                );
              } else {
                return (
                  <div className=" flex flex-col w-[210px] h-[260px] rounded-md border-2 p-3 items-center">
                    <Skeleton.Image
                      active={true}
                      style={{ width: "180px", height: "155px" }}
                    />
                    <Skeleton.Input
                      className="mt-2"
                      active={true}
                      size="small"
                      style={{ height: "20px" }}
                    />
                    <Skeleton.Avatar
                      className="mt-3"
                      active={true}
                      size="small"
                      shape="square"
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default Evolution;

// <ul>
// {Object.keys(stats).map((item) => {
//   const status = stats[item as keyof StatPokemon];
//   return (
//     <div>
//       {item} : {status}
//     </div>
//   );
// })}
// </ul>

// <div className="flex flex-col justify-center">
// {evolution?.slice(1, 2).map((item) => {
//   return (
//     <>
//       {item?.method}
//       <FontAwesomeIcon className="mt-5" icon={faArrowRight} />
//     </>
//   );
// })}
// </div>
