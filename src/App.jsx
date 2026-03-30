import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import GetStarted from './Components/GetStarted'
import NavBar from './Components/Navbar'
import Pricing from './Components/Pricing'
import UserDtls from './Components/UserDtls'
import Workflow from './Components/Workflow'

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <UserDtls></UserDtls>
        <GetStarted></GetStarted>  
       <Pricing></Pricing>  
       <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default App
