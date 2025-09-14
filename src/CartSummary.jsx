import React from "react";

function CartSummary({ items }) {
    function calculateTotal() {
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            const itemPrice = parseFloat(items[i].price);
            const itemQuantity = items[i].quantity;
            total = total + (itemPrice * itemQuantity);
        }
        return total.toFixed(2);
    }

    const totalValue = calculateTotal();

    return (
        <div className="border border-gray-200 rounded-lg shadow-md bg-white">
            <div className="p-4 bg-gray-50 rounded-t-lg">
                <h2 className="text-xl font-semibold text-gray-800">Cart Totals</h2>
            </div>
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-gray-700">
                    <p>Subtotal</p>
                    <p className="font-medium">${totalValue}</p>
                </div>
                <div className="flex justify-between items-center text-gray-800 font-bold text-lg pt-4 border-t mt-2">
                    <p>Total</p>
                    <p>${totalValue}</p>
                </div>
                <div className="pt-4">
                    <button className="w-full bg-red-500 hover:bg-red-600 h-12 rounded-md text-lg text-white font-bold transition-transform transform hover:scale-105">
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartSummary;