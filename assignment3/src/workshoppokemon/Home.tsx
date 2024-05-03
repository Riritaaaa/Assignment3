import { useGetListPokemonsQuery } from "@service/pokemonservice/Pokemonservice";
import { useState } from "react";
import logo from "@assets/Pokemon-Logo.png";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import pokeball from "@assets/Poké_Ball_icon.svg.png";
import Container from "@components/Container";
import CardPokemon from "./CardPokemon";
import "./workshoppokemon.css";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [current, setCurrent] = useState(
    parseInt(searchParams.get("page") || "1")
  );
  
  const { data, isLoading } = useGetListPokemonsQuery({
    limit: 10,
    offset: (current - 1) * 10,
  });

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
    setSearchParams({ page: String(page) });
  };

  return (
    <Container className="containerpokemon">
      <img className="w-[340px] m-auto pt-2" src={logo} />
      <p className="text-center text-[#3A5DA8] font-extrabold text-3xl">Dex</p>
      {isLoading ? (
        <div className="flex flex-row justify-center mt-[160px]">
          <img className="w-6 h-6 mr-2 self-center mb-[270px]" src={pokeball} />
          <p>loading...</p>
        </div>
      ) : (
        <div>
          <div className="flex justify-center my-10">
            <div className="grid gap-6 grid-cols-5">
              {data?.results?.map((item) => {
                return <CardPokemon name={item.name} />;
              })}
            </div>
          </div>
          <Pagination
            className="pagination w-fit m-auto"
            current={current}
            onChange={onChange}
            total={50}
          />
        </div>
      )}
    </Container>
  );
};

export default Home;
