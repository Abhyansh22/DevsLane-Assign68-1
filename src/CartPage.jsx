import React, {useState} from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';

function CartPage({ items, onUpdateItems }) {
    const handleQuantityChange = (itemId, newQuantity) => {
        const updatedItems = items.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
        onUpdateItems(updatedItems);
    };
    
    const handleRemoveItem = (itemId) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        onUpdateItems(updatedItems);
    };

    return (
        <div className="bg-gray-100 font-sans min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <main className='flex flex-col gap-10'>
                    <div className=''>
                        <div className='sm:flex border-b border-gray-200 h-14 items-center justify-between px-4 bg-gray-50 font-semibold text-gray-600'>
                            <p className='w-2/5 text-left pl-14'>Product</p>
                            <p className='w-1/5 text-center'>Price</p>
                            <p className='w-1/5 text-center'>Quantity</p>
                            <p className='w-1/5 text-center'>Subtotal</p>
                        </div>
                        
                        <CartList items={items} onQuantityChange={handleQuantityChange} onRemove={handleRemoveItem} />
                        
                        <div className='flex flex-col sm:flex-row border-t border-gray-200 p-4 items-center justify-between gap-4 bg-gray-50'>
                            <div className='flex items-center w-full sm:w-auto'>
                                <input type='text' placeholder='Coupon code' className='h-11 border border-gray-300 rounded-l-md px-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400'></input>
                                <button className='bg-red-500 text-white rounded-r-md h-11 px-6 font-semibold hover:bg-red-600 transition-colors'>Apply</button>
                            </div>
                            <button className='bg-gray-200 text-gray-700 rounded-md h-11 px-6 font-semibold hover:bg-gray-300 transition-colors w-full sm:w-auto'>
                                Update Cart
                            </button>
                        </div>
                    </div>

                    <div className='w-1/2 self-end'>
                        <CartSummary items={items} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default CartPage;