import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
function Header() {
  return (
    <div className="w-full bg-[#f85606] text-white">
      <div className="max-w-6xl mx-auto ">
        <div className=" flex justify-end gap-12 text-[12px]">
          <span>SAVE MORE IN APP</span>
          <span>BECOME A SELLER</span>
          <span>HELP & SUPPORT</span>
          <span>LOGIN</span>
          <span>SIGN UP</span>
        </div>
        <nav className="p-2">
          <ul className="flex flex-row gap-[50px] pb-5">
            <li>
              <NavLink to={"/"}>
                <img src="/images/header/logo.png" alt="" className="h-10" />
              </NavLink>
            </li>
            <li className="flex bg-white">
              <input
                type="text"
                placeholder="Search in Daraz"
                className=" bg-transparent outline-none px-3 py-1 text-gray-700 lg:w-[600px] h-12"
              />
              <button className="bg-blue-500 text-white px-3 py-1 ml-2 hover:bg-blue-600 transition">
                <CiSearch className="h-10 p-2 w-10" />
              </button>
            </li>
            <li>
              <CgShoppingCart className="w-10 h-10 p-2" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
