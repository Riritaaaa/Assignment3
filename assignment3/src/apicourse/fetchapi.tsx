import { error } from "console";
import React, { useState, useEffect } from "react";
import axios from "axios";

type pokemon = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

const fetchapi = () => {
  const [data, setData] = useState<pokemon>();

  const fetchData = () => {
    /*  fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("There was problem with the fetch operation", error);
      }); */

    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was problem with the fetch operation", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold my-5">ข้อมูลจาก API</h1>
      {data ? (
        <div className="text-center">
          <p className="mb-5">ชื่อ : {data.count}</p>
          <p>
            {data.results.map((item) => {
              return (
                <div className="mb-3">
                  ชื่อ : {item.name} <br></br>
                  URL : {item.url}
                </div>
              );
            })}
          </p>
          <p></p>
        </div>
      ) : (
        <div>ไม่มีข้อมูล</div>
      )}
    </div>
  );
};

export default fetchapi;
