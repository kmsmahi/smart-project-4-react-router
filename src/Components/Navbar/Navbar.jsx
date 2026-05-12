import { NavLink } from "react-router";
const Navbar = () => {
    const activeLink = ({ isActive }) => 
        `px-4 py-2 rounded-lg transition-all duration-300 font-semibold ${
            isActive 
            ? "bg-violet-100 text-violet-800 shadow-sm" 
            : "text-violet-600 hover:bg-violet-50 hover:text-violet-700"
        }`;

    return (
        <div className="navbar px-4 lg:px-16 py-4 mt-4 z-50 rounded-2xl border border-white/40 bg-white/30 backdrop-blur-md  transition-all">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-violet-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-xl rounded-xl z-1 mt-3 w-52 p-2 shadow-2xl border border-violet-100"
                    >
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/apps">Apps</NavLink></li>
                        <li><NavLink to="/installation">Installation</NavLink></li>
                    </ul>
                </div>
                
                {/* Brand Logo Section */}
                <div className="flex items-center gap-1">
                    <img className="w-10 drop-shadow-sm" src="/assets/logo.png" alt="Logo" />
                    <NavLink to='/' className="btn btn-ghost text-2xl font-extrabold tracking-tighter text-violet-900 normal-case hover:bg-transparent">
                        Kms.io
                    </NavLink>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
                    <li><NavLink to="/apps" className={activeLink}>Apps</NavLink></li>
                    <li><NavLink to="/installation" className={activeLink}>Installation</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end flex gap-4 items-center">
                <a
                    href="https://github.com/kmsmahi/smart-project-4-react-router"
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-violet-700 hover:bg-violet-800 border-none text-white  text-sm lg:text-lg font-medium shadow-md hover:shadow-violet-200 rounded-xl  lg:rounded-2xl  px-4 lg:px-8 py-2 lg:py-6  flex items-center transition-all normal-case"
                >
                    <img className="w-12 mr-1 brightness-0 invert" src="/assets/GitHub-Logo.wine.png" alt="" />
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;