import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

// we use Product component in FeatureProduct.js
//we have passed props there we get that data as an object
function Product(curElem) {
    // we used object destructuring here 
    const {id,name,image,price,category}=curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name} />
                <figcaption className='caption'>
                    {category}
                </figcaption>
            </figure>
            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data--price">
                        {<FormatPrice price={price}/>}
                    </p>
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default Product
