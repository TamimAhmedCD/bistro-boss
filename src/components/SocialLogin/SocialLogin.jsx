import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();

  const handleGoogleSingIn = () => {
    signInWithGoogle().then((res) => {
      console.log(res);
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
