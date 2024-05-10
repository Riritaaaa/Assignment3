import { useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./pokemon.css";
import Container from "@components/Container";
import logopokemon from "@assets/d97gfvk-c4e26092-00c2-4835-8b04-97d417e05efd.png";
import { Divider, Input } from "antd";
import { Select } from "antd";
import { FloatButton } from "antd";
import { useGetListPokemonCyclicQuery } from "@service/pokemonservicecyclic/PokemonCyclicService";
import {
  ColorPokemon,
  TypePokemon,
} from "@service/pokemonservicecyclic/pokemoncyclicresponse/PokemonCyclicResponse";
import Cardpokemon from "./cardpokemon";
import { Link, useSearchParams } from "react-router-dom";

const { Search } = Input;

export type SortType = "Lowest" | "Highest" | "A-Z" | "Z-A";

const Homepokemon = () => {
  const [type, setType] = useState<TypePokemon | "">("");
  const [selectedSort, setSelectedSort] = useState<SortType>("Lowest");
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");
  const { data, isLoading, isFetching } = useGetListPokemonCyclicQuery({
    type: (typeParam as TypePokemon) || "",
    sort: selectedSort,
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  const handleChange = (value: SortType) => {
    setSelectedSort(value);
  };

  return (
    <>
      <Container className="containerpo py-5">
        <img src={logopokemon} className="w-[500px] m-auto mb-6" />

        <div className="w-fit h-fit bg-white m-auto p-5 rounded-lg mb-8">
          <div className="flex flex-row justify-between">
            <Search
              placeholder="Search..."
              allowClear
              onSearch={handleSearch}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              style={{ width: 230 }}
              className="rounded-full"
            />
            <Select
              defaultValue={selectedSort}
              style={{ width: 180 }}
              onChange={handleChange}
              options={[
                {
                  value: "Lowest",
                  label: "Lowest Number (First)",
                },
                {
                  value: "Highest",
                  label: "Highest Number (First)",
                },
                {
                  value: "A-Z",
                  label: "A-Z",
                },
                {
                  value: "Z-A",
                  label: "Z-A",
                },
              ]}
            />
          </div>

          <Divider className="bg-[#e7e7e7]" />
          <div className="grid grid-cols-5 gap-5 gap-y-4 uppercase font-semibold">
            {Object.keys(ColorPokemon).map((item, index) => {
              return (
                <Link
                  key={index}
                  className="buttontype"
                  to={item === typeParam ? "/pokemon" : `/pokemon?type=${item}`}
                  onClick={() => {
                    if (item === typeParam) {
                      setType("");
                    } else {
                      setType(item as TypePokemon);
                    }
                  }}
                  style={{
                    backgroundColor:
                      typeParam === item
                        ? ColorPokemon[item as TypePokemon]
                        : "white",
                    color: typeParam === item ? "white" : "black",
                    transition: "0.3s",
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          {isFetching ? (
            <div className="grid gap-12 grid-cols-5 select-none">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <Cardpokemon isLoading={true} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              {data ? (
                <>
                  <div className="grid gap-12 grid-cols-5 gap-y-8">
                    {data
                      .filter((item) =>
                        item.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((item, index) => {
                        return (
                          <div className="clickcard cursor-pointer">
                            <Cardpokemon
                              name={item.name}
                              key={index}
                              isLoading={false}
                              id={item.no}
                              stats={item.stats}
                              type={item.type.map(
                                (type) => type as TypePokemon
                              )}
                              index={index}
                            />
                          </div>
                        );
                      })}
                  </div>
                </>
              ) : (
                <div>ไม่มีข้อมูล</div>
              )}
            </div>
          )}
        </div>
        <FloatButton.BackTop />
      </Container>
    </>
  );
};

export default Homepokemon;
