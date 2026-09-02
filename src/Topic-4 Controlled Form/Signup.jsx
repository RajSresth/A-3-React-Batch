import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div className="container">
      <form action="">
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
              required
            />
          </div>

          <div>
            <label htmlFor="password_input">
              Password<sup>*</sup>
            </label>
            <input
              type="password"
              id="password_input"
              placeholder="at least 8 characters"
              required
            />
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
