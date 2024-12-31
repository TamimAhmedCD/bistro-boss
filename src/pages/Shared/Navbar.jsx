import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/">Our Menu</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/">Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar p-0 w-11/12 md:w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-lg font-cinzel font-semibold">
          BISTRO BOSS
        </Link>
      </div>

      <div className="navbar-end gap-3">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <a className="btn">Login</a>
        <a className="btn">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
