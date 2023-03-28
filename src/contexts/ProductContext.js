import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data) 
        setLoading(false) 
      })
    }, []);


  return (<ProductContext.Provider value={{ products, loading }}>
    {children}
    </ProductContext.Provider>) 
}

