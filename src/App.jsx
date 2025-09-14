import React, { useState } from 'react';
import ProductList from "./ProductList";
import { Routes, Route, Link } from 'react-router-dom';
import Nav from "./Nav";
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = function (product){
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      alert(`${product.desc} quantity updated in your cart!`);
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
      alert(`${product.desc} has been added to your cart!`);
    }
  };

  const handleUpdateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
  };

  return (
    <div className="bg-gray-100 flex flex-col gap-20 overflow-x-clip">
      <Nav cartCount={cartItems.length} />
      <div className=' bg-white w-[75vw] self-center flex flex-col p-20 gap-5'>
        <div className='grow'>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/ProductDetail/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<CartPage items={cartItems} onUpdateItems={handleUpdateCartItems} />} />
          </Routes>
        </div>
        <div className='flex gap-2'>
          <Link className="pt-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:text-white" to="#">1</Link>
          <Link className="p-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:text-white" to="#">2</Link>
          <Link className="p-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:text-white" to="#">More</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;