import React from "react";

const Child = (props) => {
  const { image, age, fullname, jersyNo, team } = props;

  return (
    <div className="card">
      <div className="profile">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <div>Fullname: {fullname}</div>
        <div>Age: {age}</div>
        <div>Team: {team}</div>
        <div>Jersy: {jersyNo}</div>
      </div>
    </div>
  );
};

export default Child;
