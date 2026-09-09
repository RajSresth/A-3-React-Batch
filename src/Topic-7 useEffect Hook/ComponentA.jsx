import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Shimmer from "./Shimmer";
import "./componentA.css";

const ComponentA = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        console.log(data?.products);
        setProducts(data?.products);
      } catch (error) {
        setIsError(true);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  if (isError) {
    return <h1>{error.response.data}</h1>;
  }

  return (
    <div className="container">
      <div className="center__container">
        {
          // products = [ {}, {}, {}]
          products.map((singleProduct) => (
            <ProductList {...singleProduct} />
          ))
        }
      </div>
    </div>
  );
};

export default ComponentA;
