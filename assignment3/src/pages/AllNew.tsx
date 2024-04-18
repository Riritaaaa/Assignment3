import { useEffect } from "react";
import { data_new } from "@components/data_new";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NewsType, TypeNew } from "@components/data_type";

const AllNew = () => {
  const { typeName } = useParams<{ typeName: string }>();
  const navigate = useNavigate();
  const type = ["ข่าวกีฬา", "ข่าวการเมือง", "ข่าวดารา", "ข่าวทั่วไป"];

  useEffect(() => {
    if (typeName) {
      if (!type?.includes(typeName)) {
        navigate("/not-found");
      }
    }
  }, []);

  // if(typeName){
  //   if(!type?.includes(typeName)){
  //     return <NotFound/>
  //   }
  // }

  return (
    <div>
      {data_new.map((item) => (
        <div key={item.title}>
          {item.type_new
            .filter((type) => typeName === undefined || type.name === typeName)
            .map((type: TypeNew) => (
              <div key={type.name}>
                <h3 className="mt-8 mb-10 text-center text-2xl font-bold">
                  {type.name}
                </h3>
                {type.news_type
                  .sort(
                    (a: NewsType, b: NewsType) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map((news: NewsType, index: number) => (
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

export default AllNew;
