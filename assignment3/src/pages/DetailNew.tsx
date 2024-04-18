import { data_new } from "@components/data_new";
import { useParams, useSearchParams } from "react-router-dom";
import NotFound from "@pages/NotFound";
const DetailNew = () => {
  const { typeName, id } = useParams();
  const news = data_new
    .flatMap(
      (item) =>
        item.type_new.find((typeItem) => typeItem.name === typeName)
          ?.news_type ?? []
    )
    .find((news) => news.id.toString() === id);
  const [setSearch] = useSearchParams();

  if (!news) {
    return <NotFound />;
  }

  return (
    <div>
      <p className="text-right m-6 mr-32 font-medium">
        ผู้เข้าชม : {setSearch.get("viewer")}
      </p>
      <div>
        <h2 className="mt-8 mb-10 text-center text-2xl font-bold">
          รายละเอียด{news.headline}
        </h2>
        <div className="box">
          <p>รหัสข่าว : {id}</p>
          <p>วันที่ลงข่าว : {news.date}</p>
          <p>เวลาที่ลงข่าว : {news.time}</p>
          <p>หัวข้อข่าว : {news.headline}</p>
          <p>เนื้อหาข่าว : {news.content}</p>
          <p>ประเภทข่าว : {news.category}</p>
          <p>สำนักข่าว : {news.publisher}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailNew;
