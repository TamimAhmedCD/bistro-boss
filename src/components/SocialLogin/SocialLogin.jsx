import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSingIn = () => {
    signInWithGoogle().then((res) => {
      console.log(res);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="flex justify-center pb-8">
      <div>
        <button onClick={handleGoogleSingIn} className="btn btn-neutral">
          <FaGoogle className="mr-4"></FaGoogle> Login With GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
