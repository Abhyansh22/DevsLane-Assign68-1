// ProductCard.jsx

import React from "react";
import { Link} from "react-router-dom";

function ProductCard({ description, onAddToCart }) {
    
    function handleAddToCartClick() {
        onAddToCart(description);
    }

    return (
        <div className="flex flex-col gap-3">
            <Link to="/" className="p-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:text-white self-end mr-4">Home</Link>
            <div className="flex max-w-5xl mx-auto">
                <div className="w-1/2">
                    <img src={description.thumbnail} alt={description.desc} className="max-w-full h-auto object-contain" />
                </div>
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-medium text-gray-800 mb-4">{description.title}</h1>
                    <p className="text-2xl font-semibold text-gray-900 mb-4">${description.price}</p>
                    <p className="text-gray-600  mb-4">
                        {description.description}
                    </p>
                    <div className="flex items-center gap-4 mb-3">
                        <input type="number" defaultValue="1" min="1" className="w-16 px-3 py-2 border-2 border-black rounded-l-md text-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                        
                        <button onClick={handleAddToCartClick} className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                            ADD TO CART
                        </button>
                    </div>
                    <div className="border-1 border-gray-300 mb-2"></div>
                    <p>Category: <span className="text-red-500">{description.category}</span></p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;