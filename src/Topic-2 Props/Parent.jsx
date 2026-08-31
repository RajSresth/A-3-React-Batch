import React from "react";
import Child from "./Child";
import "./parent.css";

const Parent = () => {
  const players = [
    {
      fullname: "Virat kohli",
      team: "India",
      jersyNo: 18,
      age: 37,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2CVAZeAPVESMreOOO60fue81pv84TCz0pKrvpdq3O4yHvJwmtp_n7Xg&s=10",
    },
    {
      fullname: "Rohit Sharma",
      team: "India",
      age: 39,
      jersyNo: 45,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrkOkIEodOcdQ3RUKL5xc_jfbkGlom076sgpu1mjlE3Il5U65VbL7Fb-f&s=10",
    },
    {
      fullname: "MS Dhoni",
      age: 43,
      team: "India",
      jersyNo: 7,
      image:
        "https://i.pinimg.com/originals/e7/06/b9/e706b9c1e0531b63020524d492545388.jpg",
    },
    {
      fullname: "Vaibhav sooryavanshi",
      team: "India",
      jersyNo: 3,
      age: 15,
      image:
        "https://wpleague.in/wp-content/uploads/2026/03/Vaibhav-Suryavanshi-IPL-Career-Stats-At-A-Glance.jpeg",
    },
    {
      fullname: "KL Rahul",
      team: "India",
      jersyNo: 1,
      age: 34,
      image:
        "https://ddindia.co.in/wp-content/uploads/2025/04/RCB_VS_DC_0137.jpg",
    },
  ];

  return (
    <div className="card__container">
      {/* <Child player={players[0]}/>
      <Child player={players[1]}/>
      <Child player={players[2]}/> */}
      {players.map((element, index) => {
        return <Child {...element} />;
      })}
    </div>
  );
};

export default Parent;
