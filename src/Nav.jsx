import React from "react";
import { Link } from "react-router-dom";

function Nav({ cartCount }) {
    return (
        <div className='h-25 bg-white shadow flex items-center justify-between px-24 py-2'>
            <Link to="/">
                <img className="h-16" src="https://assets.aboutamazon.com/dims4/default/c7f0d8d/2147483647/strip/true/crop/6110x2047+0+0/resize/645x216!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F2e%2Fd7%2Fac71f1f344c39f8949f48fc89e71%2Famazon-logo-squid-ink-smile-orange.png"
                alt="Amazon Logo"/>
            </Link>
            
            <Link to="/cart" className="relative flex items-center">
                <p className="text-white border-2 border-gray-700 bg-gray-500 hover:bg-amber-700 p-3 rounded-sm">Cart</p>

                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3.5 flex items-center justify-center h-6 w-6 rounded-full bg-red-500 text-white text-xs font-bold">
                        {cartCount}
                    </span>
                )}
            </Link>
        </div>
    );
}

export default Nav;