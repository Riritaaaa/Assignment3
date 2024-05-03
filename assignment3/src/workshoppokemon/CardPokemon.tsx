import { useGetPokemonByIDQuery } from "@service/pokemonservice/Pokemonservice";
import React from "react";
import { Link } from "react-router-dom";

type props = {
  name: string;
};

const CardPokemon: React.FC<props> = ({ name }) => {
  const { data } = useGetPokemonByIDQuery(name);
  return (
    <Link to={`/pokemon/detail/${name}`} className="bg-white w-[160px] shadow-xl h-fit rounded-xl">
      <img className="w-5/6 m-auto pt-3" src={data?.image.mainimg} />
      <div className="mt-2 bg-[#e3e3e3] rounded-b-xl py-2 pl-3 pr-4 flex flex-row justify-between">
        <p className="text-[#494949] capitalize font-medium">{name}</p>
        <p className="text-[#787878] font-medium">#{data?.id}</p>
      </div>
    </Link>
  );
};

export default CardPokemon;
