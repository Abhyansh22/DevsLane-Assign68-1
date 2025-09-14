import React, { useState } from "react";
import { useParams } from "react-router-dom";
//import inventory from "./DummyData";
import { getProductData } from "./DummyData";
import ProductCard from './ProductCard';

function ProductDetail({ onAddToCart }) {
    const [product, setProduct]=useState([])

    const { id } = useParams();

    const promise = getProductData(id)
    promise.then(function(response){
        setProduct(response.data)
    })

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div>
            <ProductCard description={product} onAddToCart={onAddToCart} />
        </div>
    );
}

export default ProductDetail;