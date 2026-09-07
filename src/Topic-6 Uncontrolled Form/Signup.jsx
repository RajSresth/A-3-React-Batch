import { useState, useRef } from "react";
import "./signup.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const fullnameRef = useRef(null); //  fullnameRef = { current : <input type="text"/>}
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignupForm = (e) => {
    e.preventDefault();

    console.log("fullname:", fullnameRef.current.value);
    console.log("email:", emailRef.current.value);
    console.log("password:", passwordRef.current.value);

    fullnameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  console.log("Signup Render");

  return (
    <div className="container">
      <form action="" onSubmit={handleSignupForm}>
        <div className="form__top ">
          <h2>Signup</h2>
          <p>It will take only 3 sec.</p>
        </div>
        <div className="form__body">
          <div>
            <label htmlFor="fullname_input">
              Fullname<sup>*</sup>
            </label>
            <input
              type="text"
              id="fullname_input"
              placeholder="Enter fullname"
              ref={fullnameRef}
              required
            />
          </div>

          <div>
            <label htmlFor="email_input">
              Email<sup>*</sup>
            </label>
            <input
              type="email"
              id="email_input"
              placeholder="xyz@gmail.com"
              ref={emailRef}
              required
            />
          </div>

          <div>
            <label htmlFor="password_input">
              Password<sup>*</sup>
            </label>

            <div className="password_input_container">
              <input
                type={showPassword ? "text" : "password"}
                id="password_input"
                placeholder="at least 8 characters"
                ref={passwordRef}
                required
              />
              <div
                className="icon_container"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEye size={22} />
                ) : (
                  <FaRegEyeSlash size={22} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="form__bottom">
          <div className="btn__container">
            <button type="submit">Signup</button>
            <button type="reset">Cancel</button>
          </div>
          <p>
            Already have an account?<a href="">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
