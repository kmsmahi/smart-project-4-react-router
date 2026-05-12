import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { NavLink } from 'react-router';
const ErrorPages = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 items-center justify-center flex flex-col gap-6'>
                <img src="../assets/error-404.png" alt="" />
                <h1 className='text-3xl font-bold text-slate-800'>Oppps!!!Page not found</h1>
                <p className='text-slate-500'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <NavLink to="/" className='px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-100 active:scale-95'>Go to Home</NavLink>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPages;