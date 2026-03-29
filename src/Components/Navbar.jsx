import cartImg from '../assets/products/shopping-cart.png'

const NavBar = () => {
  return (
    <div className="navbar w-full md:w-10/12 mx-auto ">
      <div className="navbar-start">
          <h2 className="flex text-[#6C29F8] items-center gap-1 font-bold text-2xl">DigiTools</h2> 
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-[16px]">
          <li><a>Product</a></li>
          <li> <a>Features</a> </li>
          <li> <a>Pricing</a></li>
          <li><a>Testimonial</a> </li>
          <li> <a>FAQ</a> </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <img src={cartImg} alt='Cart Image'></img>
        <p className="hidden md:block">Login</p>
        <a className="btn bg-[#6C29F8] rounded-full text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;