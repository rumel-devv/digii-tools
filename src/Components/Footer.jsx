import FbImg from '../assets/facebook.png'
import InstaImg from '../assets/instagram.png'
import TwiterImg from '../assets/twitter.png'

const Footer = () => {
  return (
    <footer className="bg-[#101727] border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
         <h2 className="text-3xl font-bold tracking-tighter text-white"> DigiTools</h2>
            </div>
            <p className="text-lg max-w-md text-white">
             Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 text-white">
            <h3 className="t font-semibold mb-6 text-lg">Products</h3>
            <ul className="space-y-2 md:space-y-4  ">
              <li><a href="#"> Features </a></li>
              <li><a href="#"> Pricing </a></li>
              <li><a href="#"> Templates </a></li>
              <li><a href="#"> Intergration </a></li>
            </ul>
          </div>
          <div className="md:col-span-2 text-white">
            <h3 className="t font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-2 md:space-y-4  ">
              <li><a href="#"> Blog</a></li>
              <li><a href="#"> About </a></li>
              <li><a href="#"> Career</a></li>
              <li><a href="#"> Preess</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 text-white">
            <h3 className="t font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-2 md:space-y-4 ">
              <li><a href="#"> Documentation </a></li>
              <li><a href="#"> Help Center </a></li>
              <li><a href="#"> Comunity </a></li>
              <li><a href="#"> Contact </a></li>
            </ul>
          </div>
          <div className="md:col-span-2  text-white">
            <h3 className="t font-semibold mb-6 text-lg">Social Links</h3>
            <ul className="space-y-2 md:space-y-4 ">
            <div className='flex gap-3'>
            <img src={InstaImg} alt='Instagram Image'></img>
             <img src={TwiterImg} alt='Twitter Image'></img>
             <img src={FbImg} alt='Facebook Image'></img>
            </div>
           
            </ul>
          </div>

          

          
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-600 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

        <div className="flex gap-6">
     <a href="#"> Privacy Policy </a>
     <a href="#"> Terms of Service </a>
     <a href="#"> Cookies </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;