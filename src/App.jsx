import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import GetStarted from './Components/GetStarted'
import NavBar from './Components/Navbar'
import Pricing from './Components/Pricing'
import UserDtls from './Components/UserDtls'
import Workflow from './Components/Workflow'
import Products from './Components/Products'
import Carts from './Components/Carts'


const getProducts = async () => {
   const res = await fetch ('/Products.json')
   return res.json()
}


const productsPromise = getProducts()


function App() {

  const [active,setActive] = useState('products')

  return (
    <> 
      <NavBar></NavBar>
      <Banner></Banner>
      <UserDtls></UserDtls>

       {/* name of each tab group should be unique */}
 <div className="tabs bg-white tabs-box w-full py-14 md:w-10/12 mx-auto flex flex-col items-center space-y-4">
  <h2 className='text-3xl font-semibold'>Premium digital tools</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quam.</p>
 <span className='space-x-2.5'>
   <input onClick={() => setActive('products')} className={`btn rounded-full ${active === 'products' ? 'bg-[#801EF8]' : "" }`} type="radio" name="my_tabs_1" aria-label="Products" defaultChecked/>
   <input onClick={() => setActive('cart')} className={`btn px-6 py-0.5  rounded-full ${active === 'cart' ? 'bg-[#801EF8]' : "" }`} type="radio" name="my_tabs_1" aria-label="Cart" />
  
 </span>
</div>
 
{active === 'products' ? <Products productsPromise={productsPromise}  ></Products> : <Carts></Carts>}




        <GetStarted></GetStarted>  
       <Pricing></Pricing>  
       <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default App
