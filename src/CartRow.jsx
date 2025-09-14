import React from "react";

function CartRow({ item, onQuantityChange, onRemove }) {
    const { id, image, desc, price, quantity } = item;

    function handleQuantityChange(event) {
        const newQuantity = parseInt(event.target.value, 10);

        if (isNaN(newQuantity) || newQuantity < 1) {
            onQuantityChange(id, 1);
        } else {
            onQuantityChange(id, newQuantity);
        }
    }

    const priceAsNumber = parseFloat(price);
    const subtotal = (quantity * priceAsNumber).toFixed(2);

    return (
        <div className="flex items-center justify-between w-full p-4 border-b border-gray-200 last:border-b-0">
            <div className="flex items-center w-1/2 md:w-2/5">
                 <button onClick={() => onRemove(id)} className="text-gray-400 hover:text-red-500 mr-4 font-bold text-xl transition-colors">
                    &times;
                </button>
                <img src={image} className="w-16 h-16 object-cover rounded-md shadow-sm" alt={desc} />
                <h3 className="text-gray-800 ml-4 font-medium hidden md:block">{desc}</h3>
            </div>
            
            <p className="text-gray-800 w-1/5 text-center">${priceAsNumber.toFixed(2)}</p>
            <div className="w-1/5 flex justify-center">
                <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange}
                    className="w-16 px-2 py-1 border-2 border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                    aria-label={`Quantity for ${desc}`}
                />
            </div>
            <p className="text-gray-800 w-1/5 text-center font-semibold">${subtotal}</p>
        </div>
    );
}

export default CartRow