import { FaCalendarDays, FaCartShopping, FaWallet } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { BsCalendarCheckFill } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";

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
        </ul>
      </div>
      <div className="flex">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
