import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error))
  }

  const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    {user?.email ? <>
      <li><li><Link to="/bookings">My bookings</Link></li></li>
      <li><button onClick={handleLogOut}>Log Out</button></li>
    </>
      : <li><Link to="/login">Login</Link></li>
    }
  </>
  return (
    <div className="navbar bg-orange-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default NavBar;