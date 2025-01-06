import { useContext } from "react";
import { AuthContext } from "./../../providers/AtuhProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  //   add to cart post request
  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log(user.email, food);
      // add to cart
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axios.post("http://localhost:5000/carts", cartItem).then((res) => {
        console.log(res.data);
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to continue",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // redirect to login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
