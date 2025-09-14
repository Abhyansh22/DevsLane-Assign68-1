import React from "react";
import CartRow from "./CartRow";

function CartList({ items, onQuantityChange, onRemove }) {
    if (!items || items.length === 0) {
        return <p className="p-8 text-center text-gray-500">Your cart is empty.</p>;
    }

    return (
        <div className="flex flex-col">
            {items.map(item => (
                <CartRow 
                    key={item.id} 
                    item={item} 
                    onQuantityChange={onQuantityChange}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
}

export default CartList;