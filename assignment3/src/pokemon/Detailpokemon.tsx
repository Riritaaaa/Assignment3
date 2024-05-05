import Evolution from "./evolution";
import Center from "./centerpokemon";
import "./pokemon.css";
import Container from "@components/Container";
import { useGetPokemonCyclicByIDQuery } from "@service/pokemonservicecyclic/PokemonCyclicService";
import {
  Move,
  TypePokemon,
} from "@service/pokemonservicecyclic/pokemoncyclicresponse/PokemonCyclicResponse";
import pikachu from "@assets/pikachu.png";
import pikachu2 from "@assets/pikachu2.png";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import logopokemon from "@assets/d97gfvk-c4e26092-00c2-4835-8b04-97d417e05efd.png";
import StatRight from "./StatRight";
import Infoleft from "./Infoleft";
import Navpokemon from "./navpokemon";

const Detailpokemon = () => {
  const navigate = useNavigate();
  const { no } = useParams();
  const { data, isLoading } = useGetPokemonCyclicByIDQuery(no || "");

  return (
    <>
      <Container className="containerpokemon flex flex-col justify-center">
        {isLoading ? (
          <div>
            <div className="flex flex-row absolute top-2 left-4">
              <FontAwesomeIcon
                onClick={() => navigate("/pokemon")}
                className="bg-white rounded-full p-[10px] mr-3 cursor-pointer self-center w-[16px] h-[16px]"
                icon={faAngleLeft}
              />
              <img
                className="w-[200px] self-center rounded-lg px-3"
                style={{ backgroundColor: "#79797990" }}
                src={logopokemon}
              />
            </div>
            <div className="text-center">
              <img className="w-[26%] m-auto" src={pikachu} />
              <p className="mt-4 text-lg font-medium">Loading...</p>
            </div>
          </div>
        ) : (
          <>
            {data ? (
              <div className="mt-[-10px]">
                <Navpokemon
                  type={data.type.map((type) => type as TypePokemon)}
                />
                <div className="flex flex-row justify-between items-start">
 
                  <div className="w-20 self-center ml-9">
                    {no && parseInt(no, 10) > 1 && (
                      <FontAwesomeIcon
                        className="bg-white rounded-full p-[10px] cursor-pointer self-center w-[16px] h-[16px]"
                        onClick={() =>
                          navigate(
                            `/pokemon/${String(parseInt(no, 10) - 1).padStart(
                              3,
                              "0"
                            )}`
                          )
                        }
                        icon={faAngleLeft}
                      />
                    )}
                  </div>

                  <div className="flex flex-row m-auto">
                    <Infoleft
                      name={data.name}
                      moves={data.moves.map((move) => move as Move)}
                      no={data.no}
                      species={data.species}
                      type={data.type.map((type) => type as TypePokemon)}
                    />
                    <Center
                      name={data.name}
                      no={data.no}
                      species={data.species}
                      type={data.type.map((type) => type as TypePokemon)}
                    />
                    <StatRight
                      stats={data.stats}
                      type={data.type.map((type) => type as TypePokemon)}
                    />
                  </div>
                  <div className="w-20 self-center mr-9">
                  {no && parseInt(no, 10) < 151 && (
                      <FontAwesomeIcon
                        className="bg-white rounded-full p-[10px] cursor-pointer self-center w-[16px] h-[16px] ml-11"
                        onClick={() =>
                          navigate(
                            `/pokemon/${String(parseInt(no, 10) + 1).padStart(
                              3,
                              "0"
                            )}`
                          )
                        }
                        icon={faAngleRight}
                      />
                    )}
                  </div>
                </div>

                <Evolution
                  no={data.no}
                  species={data.species}
                  evolution={data.evolution}
                  type={data.type.map((type) => type as TypePokemon)}
                />
              </div>
            ) : (
              <div>
                <div className="flex flex-row absolute top-2 left-4">
                  <FontAwesomeIcon
                    onClick={() => navigate("/pokemon")}
                    className="bg-white rounded-full p-[10px] mr-3 cursor-pointer self-center w-[16px] h-[16px]"
                    icon={faAngleLeft}
                  />
                  <img
                    className="w-[200px] self-center rounded-lg px-3"
                    style={{ backgroundColor: "#79797990" }}
                    src={logopokemon}
                  />
                </div>
                <div className="text-center bg-[#B7B9BC] w-[700px] m-auto py-6 rounded">
                  <img className="w-[180px] m-auto" src={pikachu2} />
                  <p className="mt-4 text-lg font-medium">Not Found Pokemon!</p>
                </div>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Detailpokemon;

