import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex-col md:flex-row bg-base-100 p-0 lg:px-16 ">
      <div className="flex-1 mt-5 md:mt-0">
        <NavLink to={"/"} className=" normal-case text-xl">
          <img src="https://i.ibb.co/z79fH5D/Logo.png" alt="Net Problem" />
        </NavLink>
      </div>
      <div className=" mt-5 md:mt-0">
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "underline text-lal" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/all"}
              className={({ isActive }) =>
                isActive ? "underline text-lal" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/stat"}
              className={({ isActive }) =>
                isActive ? "underline text-lal" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
