import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerProduct from "../components/ShimmerProduct";
import ErrorPage from "../components/ErrorPage";
import axios from "axios";
import { FaUser, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

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

  const createReviewStar = (rating = 4) => {
    const total = 5;

    return Array.from({ length: total }).map((_, index) => {
      const starValue = index + 1; // startValue =1

      if (starValue <= Math.floor(rating)) {
        return <FaStar key={index} className="text-yellow-400" size={22} />;
      }

      if (starValue === Math.ceil(rating) && rating % 1 !== 0) {
        return (
          <FaStarHalfAlt key={index} className="text-yellow-400" size={22} />
        );
      }

      return <FaRegStar key={index} className="text-gray-300" size={22} />;
    });
  };
  if (loading) return <ShimmerProduct />;

  if (isError) return <ErrorPage error={error} />;

  return (
    <div className="w-full ">
      <div className="min-h-screen max-w-300  mx-auto flex flex-col flex-wrap py-20">
        <div className="h-full max-h-115 flex justify-between items-start flex-wrap">
          <div className="relative w-full max-w-130 h-115 border-2 border-gray-300 rounded-2xl p-6">
            <img
              src={response.images[0]}
              alt=""
              className="w-full h-full object-contain"
            />
            <div className="absolute top-2 left-2 bg-gray-200 text-sm font-medium text-gray-700 uppercase tracking-wide py-1.5 px-6 rounded-2xl">
              {response.category}
            </div>
          </div>

          <div className="w-full max-w-135 h-115 p-4">
            <div className="text-3xl font-semibold tracking-wider">
              {response.title}
            </div>
            <div className="text-lg my-3">{response.description}</div>
            <div className="font-semibold text-lg">
              Warrany Info: {response.warrantyInformation}
            </div>
            <div className="flex gap-2 my-4">
              {response.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-200 text-gray-700 font-medium tracking-wide py-1 px-6 rounded-lg"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="text-red-600 font-medium tracking-wide">
              Stock Available: {response.stock}
            </div>
            <div className="font-semibold text-lg">&#36; {response.price}</div>

            <div className="my-3">
              <div className="mb-5 flex gap-2 items-center">
                <button className="py-1.5 px-3 rounded-md font-bold bg-gray-200 hover:cursor-pointer">
                  -
                </button>
                <span>0</span>
                <button className="py-1.5 px-3 rounded-md font-bold bg-gray-200 hover:cursor-pointer">
                  +
                </button>
              </div>
              <button className="w-full max-w-85 py-2 bg-blue-600 text-white font-semibold tracking-wider rounded-lg hover:cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-120 flex justify-evenly items-center">
          {response.reviews.map((review, index) => {
            return (
              <div
                key={index}
                className="p-6 border-b w-80 h-45  rounded-xl bg-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {createReviewStar(review.rating)}
                </div>
                <p className="text-xl font-medium text-gray-800 tracking-wider">
                  {review.comment}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div>
                    <FaUser size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{review.reviewerName}</p>
                    <p className="font-medium text-sm">
                      {review.reviewerEmail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
