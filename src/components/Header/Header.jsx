import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";


function Header() {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto px-5">
        <div className=" flex items-center  gap-[69px] justify-between mt-5">
          <Link to={"/"}>
            <h2 className="text-xl font-bold">Home</h2>
          </Link>
          <div
            className={`flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <NavLink className={"text-lg hover:text-gray-400 transition-all" } >
                  <p>Wishlist</p>
                </NavLink>
              </div>
              <div className="flex items-center gap-1 ">
                <NavLink className={"text-xl hover:text-gray-400 transition-all"}>
                 <p>Cart</p>
                </NavLink>
              </div>
              <button onClick={() => dispatch({    type: "LOGOUT" })} className="border-none outline-none text-xl font-bold">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
