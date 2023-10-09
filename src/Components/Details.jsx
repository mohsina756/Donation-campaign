import { useLoaderData, useParams } from "react-router-dom";
import { getLocalstorage, setLocalstorage } from "../Utilities/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const datas = useLoaderData();
  const idobj = useParams();
  const idweb = parseInt(idobj.id);
  const clicked = datas.find((data) => data.id === idweb);
  const { id, Title, Link, Price, Description } = clicked;
  const setDonate = () => {
    const duble = getLocalstorage();
    const double = duble.find((dub) => dub === id);
    if (double) {
      toast("Already Donated! please select another one");
    } else {
      setLocalstorage(id);
      toast("Successfully! Donated");
    }
  };

  getLocalstorage();
  return (
    <div>
      <div className="mx-auto my-5 w-4/6 ">
        <img src={Link} alt="" />
        <div className="bg-[#0B0B0B80] h-[50px] md:h-[80px] w-4/6 absolute top-[220px] md:top-[282px] lg:top-[460px]">
          <button
            onClick={() => setDonate()}
            className="bg-lal md:bg-lal btn-sm md:btn border-none ml-10 mt-4 text-sada md:text-sada hover:text-kala"
          >
            Donate $ {Price}
          </button>
          <ToastContainer />
        </div>
      </div>
      <div className="mx-auto my-5 w-5/6">
        <p className="text-2xl font-extrabold mt-10 mb-3">{Title}</p>
        <p className="text-xs">{Description}</p>
      </div>
    </div>
  );
};

export default Details;
