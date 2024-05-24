import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import './products.scss'
import addFav from '../../redux/favorites/Favorites'

function Products() {

    const dispatch = useDispatch

    const [product,setProduct]  = useState([])


    async function ProductData(){
        try{
            const response = await axios.get("http://localhost:5000/api/products")
            setProduct(response.data)
        }catch(error){
            console.error("eror var duzelt",error)
        }
    }

    useEffect(()=>{
        ProductData()
    })

  return (









    <div className='app' >

<div className='productlist' >
    {product.map((product)=>
    <div key={product._id} className='product' >
        <img className='asdas' src={product.image} alt="" />
        <div>{product.name}</div>
        <div>{product.tittle}</div>
        <div>{product.price}</div>
        <button onClick={()=>dispatch(addFav(product))} >ADD TO CART</button>
     
    </div>
    )}
</div>

    </div>

  )
}

export default Products