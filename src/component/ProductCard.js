import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    // console.log("item?", item);
    
    const showProduct= () => {
        navigate(`/products/${item.id}`);
    }

  return (
        <div className="product-card" onClick={()=>showProduct()}>
            <img src={item?.img}/>
            
            <div className="title">
                <span>{item?.ordinaire? "[ordinaire]":""}</span>
                <span>{item?.title}</span>
            </div>
            <div className="new">{item?.new? "🌷봄신상":""}</div>
            <div className="price">₩{item?.price}</div>
        </div>
  )
}

export default ProductCard;
