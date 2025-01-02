import { useContext, useEffect, useRef, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AtuhProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login Success!",
        text: "Successfully Login",
        icon: "success",
      });
      navigate(from, {replace: true})
    });
  };

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  name="captcha"
                  type="text"
                  placeholder="type the text above"
                  ref={captchaRef}
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={disabled}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
