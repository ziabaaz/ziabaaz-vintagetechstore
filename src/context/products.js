// products context
import React , {useState, useEffect} from "react";
import url from "../utils/URL";
import axios from "axios";
import {featuredProducts, flattenProducts} from "../utils/helpers";

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then(response => {
      const featured= featuredProducts(flattenProducts(response.data));
      const products = flattenProducts(response.data);
      setProducts(products);
      setFeatured(featured);
      setLoading(false);
    }); 
    return () => { 
    }
  }, []);

  return (
    <ProductContext.Provider value={{loading,products,featured}}>{children}</ProductContext.Provider>
  );
}
