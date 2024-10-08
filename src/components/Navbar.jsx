import { Menu, X } from "lucide-react";
import { useState } from "react";
import  logo  from "../assets/logo.png";
import { navItems } from "../constants";
import Button from './Button';
export const Navbar = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"> {/* nav */}
      <div className="container px-4 mx-auto relative text-sm"> {/* container div */}
        
        <div className="flex justify-between items-center"> {/* layout-div */}
          <a href="#">
          <div className="flex items-center flex-shrink-0">  {/* logo-div */}
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12"> {/* nav-items */}
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="{item.href}">{item.label}</a>
              </li>
            ) )}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center"> {/* button-div */}
          <Button href="#" className="border">Sign In</Button>
          <Button href="#" className="bg-gradient-to-r from-orange-500 to-orange-800">Create an account</Button>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify- items- lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href="{item.href}">{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 justify-end">
              <Button href="#" className="border">Sign In</Button>
              <Button href="#" className="bg-gradient-to-r from-orange-500 to-orange-800">Create an account</Button>
              </div>
            </div>
          )}
      </div>
    </nav>
  )
}

