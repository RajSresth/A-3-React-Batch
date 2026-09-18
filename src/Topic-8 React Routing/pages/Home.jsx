import { useState, useEffect } from "react";
import axios from "axios";
import ShimmerProduct from "../components/ShimmerProduct";
import ErrorPage from "../components/ErrorPage";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";
import carouselProducts from "../constants/carousel";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Carousel from "../components/Carousel";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        setProducts(data?.products);
      } catch (error) {
        setIsError(true);
        setError(error?.response?.data);
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();
  }, []);

  if (loading) return <ShimmerProduct />;

  if (isError) return <ErrorPage error={error} />;

  return (
    <div className="w-full min-h-[calc(100vh - 100px)]">
      <div className="mx-auto w-screen max-w-300  py-25">
        <div className="mx-auto w-full max-w-250 h-120 shadow-[0px_0px_10px_2px_#bbb]  rounded-4xl overflow-hidden cursor-pointer">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="product-carousel"
          >
            {carouselProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Carousel {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="mx-auto w-screen max-w-300 flex flex-wrap gap-14 p-25">
        {products.map((product) => (
          <Link to={`product/${product.id}`} key={product.id}>
            <ProductList {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
