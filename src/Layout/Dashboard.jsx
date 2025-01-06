import { FaCalendarDays, FaCartShopping, FaShop, FaWallet } from "react-icons/fa6";
import { MdEmail, MdReviews } from "react-icons/md";
import { BsCalendarCheckFill } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoHome, IoMenu } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 text-black gap-2">
          <li>
            <NavLink to="/dashboard/user-ome">
              <IoHome />
               User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarDays />
               Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment-history">
              <FaWallet />
               Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping />
               My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-review">
              <MdReviews />
               Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-booking">
              <BsCalendarCheckFill />
               My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/">
            <IoHome />
               Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
            <IoMenu />
               Menu
            </Link>
          </li>
          <li>
            <Link to="/order/salad">
            <FaShop />
               Shop
            </Link>
          </li>
          <li>
            <Link to="/">
            <MdEmail />
               Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
