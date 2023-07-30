import React from 'react'
import ProductReviewCard from './ProducReviewCard.jsx';
import '../styles/ProductReviews.css';

function ProductReview({productReviews}) {
  return (
    <div className='ProductReviews'>
      {
        productReviews.map((item,index)=>{
            return (<ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image}/>)
        })
      }
    </div>
  )
}

export default ProductReview
