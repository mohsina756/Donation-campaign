import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalstorage } from "../Utilities/localStorage";
import Donated from "./Donated";

const Alldonation = () => {
  const [donated, setDonated] = useState([]);
  const [showall, setshowall] = useState(4);
  const datas = useLoaderData();
  useEffect(() => {
    const storedData = getLocalstorage();
    if (datas.length > 0) {
      const donated = datas.filter((data) => storedData.includes(data.id));
      setDonated(donated);
    }
  }, [datas]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-16 my-10 gap-5">
        {donated.slice(0, showall).map((data, idx) => (
          <Donated key={idx} data={data}></Donated>
        ))}
      </div>
      <div
        className={
          (donated.length <= showall && "hidden") || "flex justify-center"
        }
      >
        <button
          onClick={() => setshowall(donated.length)}
          className="btn  bg-[#009444] text-sada hover:text-kala"
        >
          Show all
        </button>
      </div>
    </div>
  );
};

export default Alldonation;
