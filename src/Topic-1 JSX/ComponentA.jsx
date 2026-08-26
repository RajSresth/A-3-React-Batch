import Card from "./Card";

const ComponentA = () => {
  const fullname = "Chombu";
  const age = 22;

  return (
    <div>
      <Card fullname={fullname} age={age} />
    </div>
  );
};

export default ComponentA;
