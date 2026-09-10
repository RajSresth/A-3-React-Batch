import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <a href="/">
          <div>LOGO</div>
        </a>
        <nav>
          <a href="/shop">Shop</a>
          <a href="/profile">Profile</a>
          <a href="/cart">Cart</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
