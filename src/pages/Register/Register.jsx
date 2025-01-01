// import { useContext, useEffect, useRef, useState } from "react";
import { useForm, } from "react-hook-form";
// import { AuthContext } from "../../providers/AtuhProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data)

//   const captchaRef = useRef(null);
//   const [disabled, setDisabled] = useState(true);
//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);

//   const { createUser } = useContext(AuthContext);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     createUser(email, password).then((result) => {
//       const user = result.user;
//       console.log(user);
//     });
//   };

//   const handleValidateCaptcha = () => {
//     const userCaptchaValue = captchaRef.current.value;
//     if (validateCaptcha(userCaptchaValue)) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              {...register("name", {required: true})}
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              {...register("email", {required: true})}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              {...register("password", {required: true, minLength:6, maxLength: 16})}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && <span>This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
