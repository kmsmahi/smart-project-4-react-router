import { NavLink } from "react-router";

const Navbar = () => {
    const activeLink = ({ isActive }) => 
        `px-4 py-2 rounded-lg transition-all duration-300 font-semibold ${
            isActive 
            ? "bg-violet-100 text-violet-800 shadow-sm" 
            : "text-violet-600 hover:bg-violet-50 hover:text-violet-700"
        }`;

    return (
        <div className="navbar px-4 lg:px-16 py-3 mt-4 z-50 rounded-2xl border border-white/40 bg-white/30 backdrop-blur-md shadow-lg transition-all">
            
            {/* Start Section: Burger + Logo */}
            <div className="navbar-start w-auto flex-1 gap-2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-violet-700 p-0 h-10 w-10 min-h-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-xl rounded-xl z-[1] mt-3 w-52 p-2 shadow-2xl border border-violet-100"
                    >
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/apps">Apps</NavLink></li>
                        <li><NavLink to="/installation">Installation</NavLink></li>
                    </ul>
                </div>
                
                <NavLink to='/' className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img className="w-8 lg:w-10 object-contain" src="/assets/logo.png" alt="Logo" />
                    <span className="text-xl lg:text-2xl font-black tracking-tighter text-violet-900 uppercase">
                        Kms.io
                    </span>
                </NavLink>
            </div>

            {/* Center Section: Desktop Nav */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
                    <li><NavLink to="/apps" className={activeLink}>Apps</NavLink></li>
                    <li><NavLink to="/installation" className={activeLink}>Installation</NavLink></li>
                </ul>
            </div>

            {/* End Section: GitHub Button */}
            <div className="navbar-end w-auto">
                <a
                    href="https://github.com/kmsmahi/smart-project-4-react-router"
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-violet-700 hover:bg-violet-800 border-none text-white rounded-xl lg:rounded-2xl px-3 lg:px-6 h-10 lg:h-12 min-h-0 flex items-center transition-all normal-case gap-2"
                >
                    <img className="w-5 lg:w-6 brightness-0 invert" src="/assets/GitHub-Logo.wine.png" alt="" />
                    <span className="font-bold  text-base">Contribute</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;