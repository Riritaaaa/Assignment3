import { useGetPokemonByIDQuery } from "@service/pokemonservice/Pokemonservice";
import pokeball from "@assets/Poké_Ball_icon.svg.png";
import Container from "@components/Container";
import CardDetail from "./CardDetail";
import { useNavigate, useParams } from "react-router-dom";
import "./workshoppokemon.css";
import logo from "@assets/Pokemon-Logo.png";

const Detail = () => {
  const navigate = useNavigate();
  const { name_pokemon } = useParams();
  const { data, isLoading } = useGetPokemonByIDQuery(name_pokemon || "");
  return (
    <Container className="containerpokemon flex justify-center items-center">
      {isLoading ? (
        <div>
          <img className="w-[340px] m-auto" src={logo} />
          <div className="flex flex-row justify-center mt-[160px]">
            <img
              className="w-6 h-6 mr-2 self-center mb-[270px]"
              src={pokeball}
            />
            <p>loading...</p>
          </div>
        </div>
      ) : (
        <>
          {data ? (
            <div>
              <CardDetail name={name_pokemon} />
            </div>
          ) : (
            <div>
              <img className="w-[340px] m-auto" src={logo} />
              <div className="mt-8 mb-3">
                <p className="text-[#3a5da8] font-extrabold text-[80px]">
                  NOT FOUND
                </p>
              </div>
              <div
                onClick={() => navigate("/pokemon/pokemon-list")}
                className="font-bold text-xl text-[#3a5da8] border-solid border-b-2 border-[#3a5da8] text-center m-auto w-fit cursor-pointer"
              >
                back to home
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Detail;
