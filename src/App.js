import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch('./products.json')
        .then(function(response){
            return response.json();
        })
        .then(function(json) {
            console.log(json.products);
            setProducts(json.products);
        })
  }
  useEffect(() => {
      getData()
  }, [])
  
  return (
    <>
      <Header/>
      <Products 
        products={products}
      />
    </>
  );
}

export default App;
