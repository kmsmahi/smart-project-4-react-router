import { NavLink } from "react-router";

const Navbar = () => {
    return (
        /* We keep your exact px-16 and mt-4 layout */
        <div className="navbar  borde rounded-2xl px-16 mt-4 sticky top-4 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-violet-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-lg rounded-box z-1 mt-3 w-52 p-2 shadow-2xl border border-violet-100"
                    >
                        <li><NavLink to="/" className="text-violet-600 font-medium hover:text-violet-700">
                        Home</NavLink></li>
                        <li><NavLink to="/apps" className="text-violet-600 font-medium hover:text-violet-700">
                        Apps</NavLink></li>
                        <li><NavLink to="/installation" className="text-violet-600 font-medium hover:text-violet-700">In
                        stallation</NavLink></li>
                    </ul>
                </div>
                
                {/* Logo Section */}
                <div className="flex items-center justify-center gap-0">
                    <img className="w-10 drop-shadow-md" src="/assets/logo.png" alt="Logo" />
                    <NavLink to='/' className="btn btn-ghost text-2xl font-bold tracking-tight text-violet-900">Kms.io</NavLink>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <li>
                        <NavLink to="/" className="text-violet-600 font-medium hover:text-violet-700">
                        Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/apps" className="text-violet-600 font-medium hover:text-violet-700">
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/installation" className="text-violet-600 font-medium hover:text-violet-700">
                            Installation
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="navbar-end flex gap-4 items-center">
                <a
                href="https://github.com/kmsmahi/smart-project-4-react-router"
                target="_blank"
                rel="noreferrer"
                className="btn bg-violet-700 hover:bg-violet-500 border-none text-white text-lg shadow-md rounded-xl px-8 py-2 flex items-center gap-0 transition-all">
                    <span>
                        <img className="w-12 mr-2 brightness-0 invert" src="/assets/GitHub-Logo.wine.png" alt="" />
                    </span>
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;