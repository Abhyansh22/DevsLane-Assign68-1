import React from "react";
import { Link } from "react-router-dom";
//import inventory from "./DummyData";

function Product(props){ 
    return(
        <div className="w-72 m-5 gap-1 flex flex-col pb-5 grow">
            <img className="w-100% max-w-xs h-72 object-cover" src={props.image} alt=""/>
            <p className="text-gray-400 text-xs">{props.category}</p>
            <h3 className="font-bold text-gray-600">{props.desc}</h3>
            <p className="text-gray-600">${props.price}</p>
            <Link to={"/ProductDetail/"+props.id} className="bg-blue-500 rounded-xl py-3 px-6 max-w-xs text-center hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:text-white">View details</Link>
        </div>
    )

}

export default Product