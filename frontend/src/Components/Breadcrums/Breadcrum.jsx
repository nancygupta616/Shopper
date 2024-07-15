import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
    const category = product?.category || 'Default Category';
    const name = product?.name || 'Default Product Name';

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {category} <img src={arrow_icon} alt="" /> {name}
    </div>
  )
}

export default Breadcrum
