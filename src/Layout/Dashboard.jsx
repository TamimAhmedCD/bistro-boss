import {
  FaCalendarDays,
  FaCartShopping,
  FaList,
  FaShop,
  FaUsers,
  FaWallet,
} from "react-icons/fa6";
import {
  MdEmail,
  MdOutlineMenuOpen,
  MdRestaurant,
  MdReviews,
} from "react-icons/md";
import { BsCalendarCheckFill } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoHome, IoMenu } from "react-icons/io5";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 text-black gap-2">
          {isAdmin ? (
            // admin nav
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <IoHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-items">
                  <MdRestaurant />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">
                  <MdOutlineMenuOpen />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-bookings">
                  <FaList />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-booking">
                  <BsCalendarCheckFill />
                  My Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            // user nav
            <>
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
            </>
          )}
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
