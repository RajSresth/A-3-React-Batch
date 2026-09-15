import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerProduct from "../components/ShimmerProduct";
import ErrorPage from "../components/ErrorPage";
import axios from "axios";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        console.log("data", data);
        setResponse(data);
      } catch (error) {
        setIsError(true);
        setError(error?.response?.data);
      } finally {
        setLoading(false);
      }
    };

    getSingleProduct();
  }, []);

  if (loading) return <ShimmerProduct />;

  if (isError) return <ErrorPage error={error} />;

  return (
    <div>
      <div className="w-125 h-75">
        <img
          src={response.images[0]}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <div>{response.title}</div>
        <div>{response.description}</div>
        <div>{response.category}</div>
        <div>{response.price}</div>
      </div>
    </div>
  );
};

export default ProductPage;
