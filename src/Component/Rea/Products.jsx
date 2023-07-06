import React,{useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useSelector,useDispatch } from 'react-redux';
import {addCart} from '../redux/action/index'


const Products = () => {
    const {id} = useParams();
    const[product,setProduct] = useState([]);
    const[loading,setLoading]  = useState(false)

    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product))
    }
      
    useEffect(()=>{
        const getProducts = async()=>{
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            console.log(response)
            setProduct(await response.json())
            console.log(setProduct)
            setLoading(false)
        }
         getProducts();  
    },[])


    const Loading  = ()=>{
        return(
            <>
              
             <div className="col-md-6">
                <Skeleton height={400}/>
             </div>
             <div className="col-md-6">
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
             </div>

            </>
        )
    }


    const ShowProducts =()=>{
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt ={product.title} height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead'>
                    Rating{product.rating && product.rating.rate }
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    ${product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark' onClick={()=>addProduct(product)}>Add to Cart</button>
                <NavLink to= "/cart">
                <button className='btn btn-outline-dark ms-2 px-3 py-2'>Go to Cart</button>
                </NavLink>
              
            </div>
            </>
        )
    }
  return (
    <div>
       <div className="container py-5">
        <div className="row py-5">
            {loading ? <Loading/> : <ShowProducts/>}
        </div>
       </div>
    </div>
  );
}

export default Products;
