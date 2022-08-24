import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    //console.log({data});
 };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());

  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }
  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  
  // console.log(cart);
  
  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={
            <Cart 
              cart={cart} 
              onUpdateCartQuantity={handleUpdateCartQuantity} 
              onEmptyCart={handleEmptyCart}
              onRemoveFromCart={handleRemoveFromCart}
            />}
          />
          <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
