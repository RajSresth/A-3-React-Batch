import { useState, useEffect } from "react";
import axios from "axios";
import ShimmerProduct from "../components/ShimmerProduct";
import ErrorPage from "../components/ErrorPage";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

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
    <div className="w-screen min-h-[calc(100vh - 100px)]">
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
