import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import NavBar from './Components/Navbar'
import Pricing from './Components/Pricing'
import UserDtls from './Components/UserDtls'

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <UserDtls></UserDtls>

       <Pricing></Pricing>  
      <Footer></Footer>
    </>
  )
}

export default App
