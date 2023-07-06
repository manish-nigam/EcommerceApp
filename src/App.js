 
import './App.css';
import Nav from './Component/Nav/Nav';
import {Routes,Route} from 'react-router-dom'
import Product from './Component/Rea/Product';
import Cart from './Component/Rea/Cart';
import Home from './Component/Rea/Home';
import Products from './Component/Rea/Products';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/product' element ={<Product/>}/>
        <Route path='/product/:id' element ={<Products/>}/>
        <Route path='/cart' element ={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
