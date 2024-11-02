import { NavLink } from "react-router-dom"
// import Home from './../Home/Home';


const Navbar = () => {

    const links = <>
<ul className="flex space-x-4">
  <li>
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        isActive 
          ? "border border-green-500 text-green-500 px-4 py-2 rounded-lg" 
          : "text-gray-600 px-4 py-2"
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="listedbook" 
      className={({ isActive }) => 
        isActive 
          ? "border border-green-500 text-green-500 px-4 py-2 rounded-lg" 
          : "text-gray-600 px-4 py-2"
      }
    >
      Listed Books
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="pagestoread" 
      className={({ isActive }) => 
        isActive 
          ? "border border-green-500 text-green-500 px-4 py-2 rounded-lg" 
          : "text-gray-600 px-4 py-2"
      }
    >
      Pages to Read
    </NavLink>
  </li>
</ul>


    </>
    return (
        <div className="navbar bg-base-100 mt-6">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                  </div>
                  <a className=" text-[rgb(19,_19,_19)] text-[28px] font-bold leading-[33px] tracking-[0px] text-center mt-0">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    {links}
                  </ul>
                </div>
                <div className="navbar-end py-2">
                    <button className="btn text-white mx-2 w-[116px] h-[57px] flex-row justify-center items-center gap-[10] px-[28px] py-[18px] rounded-[8px] bg-[rgb(35,_190,_10)]">Sign In</button>
                    <button className="btn text-white mx-2 w-[116px] h-[57px] flex-row justify-center items-center gap-[10] px-[28px] py-[18px] rounded-[8px] bg-[rgb(89,_198,_210)]">Sign Up</button>
                </div>

        </div>
    );
};

export default Navbar;