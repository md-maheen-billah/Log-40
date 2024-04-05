import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const aNews = news.find((aNews) => aNews._id == id);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 grid-cols-1 mt-7 gap-3">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold leading-7 mb-4">Dragon News</h2>
          <div className="p-7 border-2 rounded-md">
            <img src={aNews.image_url} alt="" />
            <h2 className="text-2xl font-bold leading-[45px] mt-4">
              {aNews.title}
            </h2>
            <p className="leading-6 text-[#706F6F]">{aNews.details}</p>
            <button className="flex mt-8 items-center gap-4 hover:duration-300 hover:cursor-pointer hover:bg-slate-600 bg-[#D72050] text-white px-6 py-3">
              <FaArrowLeft /> All news in this category
            </button>
          </div>
        </div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default News;
