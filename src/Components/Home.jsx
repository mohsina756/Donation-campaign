import { useLoaderData } from "react-router-dom";
import Showalldata from "./Showalldata";
import { useEffect, useState } from "react";

const Home = () => {
  const [alldata, setData] = useState([]);
  let datas = useLoaderData();
  useEffect(() => {
    if (datas) {
      setData(datas);
    }
  }, [datas]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value;
    const filterData = datas.filter((item) => item.Category === input);
    console.log(filterData);
    if (filterData) {
      setData(filterData);
    } else {
      setData(datas);
    }
  };
  return (
    <div>
      {/* banner section */}
      <div
        className="hero bg-no-repeat w-full h-[500px] bg-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR3m0yTFd50ROlPOwOU0nP3BmP0Nc8OK4Ep-1S2aZLD3DiEpJg4MI0du990)",
        }}
      >
        <div className="hero-overlay bg-sada bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-kala">
              I Grow By Helping People In Need
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                name="search"
                type="text"
                placeholder="Search here"
                className="input w-full max-w-xs text-kala"
              />
              <button className="btn bg-lal text-sada">Search</button>
            </form>
          </div>
        </div>
      </div>
      {/* Data section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10 mb-16 mt-2">
        {alldata.map((data, idx) => (
          <Showalldata key={idx} data={data}></Showalldata>
        ))}
      </div>
    </div>
  );
};

export default Home;
