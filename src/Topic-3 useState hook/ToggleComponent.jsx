import React, { useState } from "react";

const ToggleComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
      <button onClick={handleClick}>Toggle Button</button>
    </div>
  );
};

export default ToggleComponent;
