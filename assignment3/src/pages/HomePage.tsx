import React from "react";
import { Link } from "react-router-dom";
import { data_new } from "@components/data_new";

const HomePage = () => {
  const sortedData = data_new.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      {sortedData.map((item) => (
        <div key={item.title}>
          <h2 className="text-2xl my-9 text-center font-bold">{item.title}</h2>
          <p className="text-center font-semibold text-base mb-9">{item.sub_title}</p>
          {item.type_new.map((type) => (
            <div key={type.name}>
              <h3 className="ml-24 font-bold text-lg">
                ประเภทข่าว : {type.name}
              </h3>
              {type.news_type.slice(0, 2).map((news, index) => (
                <div className="box hover:bg-gray-100">
                  <Link
                    key={index}
                    to={`/home/detail/${type.name}/${news.id}?viewer=Rita`}
                  >
                    <p className="text-[#a2a2a2]">{news.date}</p>
                    <h4 className="font-bold">{news.headline}</h4>
                    <p>{news.content}</p>
                    <p className="text-[#a2a2a2]">
                      ประเภทข่าว : {news.category}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
