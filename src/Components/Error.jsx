import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page" className="text-center py-28 text-4xl font-bold">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <Link to={"/"}>
        <button className="btn text-sada bg-lal mt-5">Go Home</button>
      </Link>
    </div>
  );
}
