import { Link } from "react-router-dom";
const Donated = (data) => {
  const { id, Price, Title, Link2, Card_bg, Text_bg, Category_bg, Category } =
    data.data;
  return (
    <div>
      <div
        className="card md:card-side bg-base-100 shadow-xl h-full lg:h-[200px]"
        style={{ backgroundColor: Card_bg }}
      >
        <figure>
          <img className="h-fit" src={Link2} alt="No internet" />
        </figure>
        <div className="card-body text-sm">
          <h2
            className=" w-fit px-2 rounded"
            style={{ backgroundColor: Category_bg, color: Text_bg }}
          >
            {Category}
          </h2>
          <h2 className="card-title font-extrabold">{Title}</h2>
          <p className="card-title " style={{ color: Text_bg }}>
            $ {Price}
          </p>
          <div className="card-actions ">
            <Link to={`/details/${id}`}>
              <button
                className=" text-sada btn-sm md:btn-sm rounded" 
                style={{ backgroundColor: Text_bg }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donated;
