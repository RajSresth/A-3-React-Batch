import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        action=""
        className="w-full max-w-105  bg-white shadow shadow-gray-500 space-y-8 p-8 px-10 rounded-xl"
      >
        <div>
          <h3 className="text-3xl font-semibold tracking-wider text-blue-500 text-center">
            Signup
          </h3>
          <p className=" text-center mt-2 text-gray-500">It will take 3 sec.</p>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="fullname_input" className="font-semibold text-lg">
              Fullname<sup className="text-red-700 text-lg">*</sup>
            </label>
            <input
              type="text"
              id="fullname_input"
              placeholder="Enter fullname"
              className="mt-1 w-full px-3.5 py-1.75 text-lg border-none ring-1 ring-gray-400 focus:ring-1 rounded-md  focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email_input" className="font-semibold text-lg">
              Email<sup className="text-red-700 text-lg">*</sup>
            </label>
            <input
              type="email"
              id="email_input"
              placeholder="xyz@gmail.com"
              className="mt-1 w-full px-3.5 py-1.75 text-lg border-none ring-1 ring-gray-400 focus:ring-1 rounded-md  focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password_input" className="font-semibold text-lg">
              Password<sup className="text-red-700 text-lg">*</sup>
            </label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password_input"
                placeholder="at least 8 characters"
                className="mt-1 w-full px-3.5 py-1.75 text-lg border-none ring-1 ring-gray-400 focus:ring-1 rounded-md  focus:ring-blue-400"
                required
              />
              <div>{showPassword ? <></> : <></>}</div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white font-semibold tracking-wider rounded-lg hover:cursor-pointer  hover:bg-blue-700"
          >
            Signup
          </button>
          <button
            type="reset"
            className="w-full mt-2 py-2.5 bg-blue-600 text-white font-semibold tracking-wider rounded-lg hover:cursor-pointer hover:bg-blue-700"
          >
            Cancel
          </button>
          <p className="text-center mt-2 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold tracking-wide"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
