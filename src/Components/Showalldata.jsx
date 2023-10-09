import { Link } from "react-router-dom";

const Showalldata = (data) => {
  const { id, Title, Category, Picture, Card_bg, Text_bg, Category_bg } =
    data.data;
  return (
    <Link to={`/details/${id}`}>
      <div
        className="card card-compact shadow-xl mx-auto"
        style={{ backgroundColor: Card_bg }}
      >
        <figure>
          <img src={Picture} alt="Shoes" />
        </figure>
        <div className="card-body" style={{ color: Text_bg }}>
          <h2
            className=" w-fit px-2 rounded"
            style={{ backgroundColor: Category_bg }}
          >
            {Category}
          </h2>
          <p className="card-title text-left">{Title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Showalldata;
