import React from "react";
import {
  ColorPokemon,
  TypePokemon,
} from "@service/pokemonservicecyclic/pokemoncyclicresponse/PokemonCyclicResponse";

type props = {
  species: string;
  name: string;
  no: number | string;
  type: TypePokemon[];
};

const centerpokemon: React.FC<props> = ({ species, name, type, no }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-10">
      {type?.slice(0, 1).map((item) => (
        <>
          <p className="uppercase font-bold text-4xl text-[#676767]">{name}</p>
          <p
            className="capitalize p-1 px-3 rounded text-white w-fit mt-4 mb-10"
            style={{
              backgroundColor: ColorPokemon[item],
              boxShadow: `0 0 10px ${ColorPokemon[item]}`,
            }}
          >
            {species} Pokémon{" "}
          </p>
          <img
            className="w-[350px]"
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${no}.png`}
          />
        </>
      ))}
    </div>
  );
};

export default centerpokemon;
