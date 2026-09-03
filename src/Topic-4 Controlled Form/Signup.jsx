import { useState } from "react";
import "./signup.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignupForm = (e) => {
    e.preventDefault();

    console.log("fullname:", fullname);
    console.log("email:", email);
    console.log("password:", password);

    setFullname("");
    setEmail("");
    setPassword("");
  };

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
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
