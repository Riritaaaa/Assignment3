import React from "react";
import {
  ColorPokemon,
  TypePokemon,
} from "@service/pokemonservicecyclic/pokemoncyclicresponse/PokemonCyclicResponse";
import { motion } from "framer-motion";

type props = {
  species: string;
  name: string;
  no: number | string;
  type: TypePokemon[];
};

const centerpokemon: React.FC<props> = ({ species, name, type, no }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-16">
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
          <motion.div
            key={no}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 8,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <img
              className="w-[320px] my-6"
              src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${no}.png`}
            />
          </motion.div>
        </>
      ))}
    </div>
  );
};

export default centerpokemon;
