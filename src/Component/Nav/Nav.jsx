import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Nav = () => {
  const state = useSelector((state)=>state.handleCart)
  return (
   <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Geekster Mart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Product</a> */}
          <Link to="/product" className='nav-link'>Product</Link>
        </li>
        </ul>
        <Link to='/cart' className='btn btn-outline-dark'>
        <i className='fa fa-sign-in-me-1'></i>
          Cart({state.length})
        </Link>
        
    </div>
  </div>
</nav>
   </>
  );
}

export default Nav;
