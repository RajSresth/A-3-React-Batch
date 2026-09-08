import {useState, useEffect} from 'react'
import ProductList from './ProductList';
import Shimmer from './Shimmer';

const ComponentA = () => {
    const [loading, setLoading] = useState(true); 
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => { 

       const getAllProducts = async () => {
            try{
                const response = await  fetch("https://dummyjson.com/productsssss");
                if(!response.ok)
                {
                    throw new Error("Something went wrong");
                }
                const data = await response.json();
                setProducts(data.products);
            }
            catch(error)
            {
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }
        getAllProducts();
    }, []);


    if(loading)
    { 
        return <Shimmer />
    }

  return (
    <div>
        <ProductList/>
    </div>
  )
}

export default ComponentA;


