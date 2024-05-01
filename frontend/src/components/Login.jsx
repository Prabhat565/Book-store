import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("You are Logged in successfully");
          document.getElementById("my_modal_3").close();

          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 2000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);

          toast.error("Tu kon h bhai:  " + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
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
              <br />
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
                Login
              </button>
              <Link to="/signup" className="underline text-red-300">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
