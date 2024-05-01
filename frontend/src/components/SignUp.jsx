import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function SignUp() {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Ban gya bhai tera account...");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);

          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div id="my_modal_3" className=" border-2 border-solid p-5 rounded-md ">
        <div className="modal-box w-full">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Sign Up</h3>
            <div className="mt-4 space-y-4">
              <label>Name</label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Name"
                className="w-80 px-3 border rounded-md py-1 "
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-4">
              <label>Email</label>
              <br />
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md py-1 "
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-4">
              <label>Password</label>
              <br />
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter your Password"
                className="w-80 px-3 border rounded-md py-1"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-amber-500 text-white rounded-md px-3 py-1 hover:bg-amber-300 duration-200">
                Sign Up
              </button>
              <p className="ml-5 mr-3 ">Already have an Account? </p>
              <Link to="/" className="underline text-red-300">
                {" "}
                Login Here.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
