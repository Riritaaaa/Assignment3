import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cardpokemon from "./cardpokemon";
import "./pokemon.css";
import Container from "@components/Container";
import logopokemon from "@assets/d97gfvk-c4e26092-00c2-4835-8b04-97d417e05efd.png";
import { FloatButton } from "antd";

type Move = {
  move: string;
  type: string;
  category: string;
  pp: number;
  power: number | null;
  accuracy: number | null;
  effect: string;
};

type EvolutionStage = {
  stage: number;
  method: string;
  no: string;
  name: string;
  url: string;
  sprite: {
    redblue: string;
    redgreen: string;
    yellow: string;
  };
};

type Pokemon = {
  no: string;
  name: string;
  species: string;
  type: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    special: number;
    total: number;
  };
  moves: {
    byLevelUp: Move[];
    byTm: Move[];
    byHm: Move[];
  };

  evolution: EvolutionStage[];
  sprite: {
    redblue: string;
    redgreen: string;
    yellow: string;
  };
};

type PokemonApiResponse = {
  status: string;
  requestedAt: string;
  data: {
    data: Pokemon[];
  };
};

export const ColorPokemon = {
  bug: "#729F3F",
  dragon: "rgb(241,110,87)",
  fire: "rgb(253,125,36)",
  ghost: "rgb(123,98,163)",
  ground: "rgb(171,152,66)",
  normal: "rgb(164,172,175)",
  psychic: "rgb(243,102,185)",
  electric: "rgb(238,213,53)",
  fighting: "rgb(213,103,35)",
  flying: "rgb(157, 225, 244)",
  grass: "rgb(155,204,80)",
  ice: "rgb(81,196,231)",
  poison: "rgb(185,127,201)",
  rock: "rgb(123, 103, 14)",
  water: "rgb(69,146,196)",
};

export type TypePokemon = keyof typeof ColorPokemon;

const Detailpokemon = () => {
  const [data, setData] = useState<PokemonApiResponse>();
  const [isLoading, setIsloading] = useState(false);
  const [type, setType] = useState<TypePokemon | "">("");

  const fetchData = async () => {
    setIsloading(true);
    const no = "pokemon_no";
    let url = `https://pokemon-api.cyclic.app/api/v1/pokemon/${no}`;

    let params = new URLSearchParams({
      type,
    });

    try {
      if (type) {
        url = url + "?" + params.toString();
      }
      const response = await axios.get(url);

      setData(response.data.data.data);
      console.log(response);
    } catch (error) {
      console.error("There was a problem with the fetch operation", error);
    }
    setIsloading(false);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <>
      <Container className="containerpo">
        <div className="flex justify-center">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {data ? (
                <>
                  <div className="grid gap-12 grid-cols-5 gap-y-8">
                    {data.data.data.map((item) => {
                      return (
                        <div className="clickcard cursor-pointer">
                          <Cardpokemon
                            name={item.name}
                            isLoading={false}
                            id={item.no}
                            stats={item.stats}
                            type={item.type.map((type) => type as TypePokemon)}
                          />
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div>Not Found Pokemon!</div>
              )}
            </div>
          )}
        </div>
        <FloatButton.BackTop />
      </Container>
    </>
  );
};

export default Detailpokemon;
