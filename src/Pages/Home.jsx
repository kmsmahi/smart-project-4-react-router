import React from 'react';
import Banner from '../Components/Banner/Banner';
import AppsCard from '../Components/AppsCard/AppsCard';
import useApps from '../CustomHooks/useApps';
import { NavLink } from 'react-router';

const Home = () => {
    const { apps, loading, error } = useApps();
    const sliceApps=apps.slice(0,8);
   if (loading) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
            <div className="flex flex-col md:flex-row items-center gap-4 animate-pulse">
                <div className="w-12 md:w-16">
                    <img 
                        className="w-full h-auto object-contain" 
                        src="../assets/logo.png" 
                        alt="Logo" 
                    />
                </div>

                
                <h2 className="text-xl md:text-2xl font-black text-violet-600 tracking-tight text-center">
                    Loading productive tools...
                </h2>
            </div>
            
            
            <div className="w-48 h-1 bg-slate-200 rounded-full mt-6 overflow-hidden">
                <div className="w-1/2 h-full bg-violet-600 rounded-full animate-infinite-scroll"></div>
            </div>
        </div>
    );
}
    
    if (error) {
        return <div className="text-red-500 text-center mt-20">Error: {error}</div>;
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            <Banner />
            
            {/* Main Content Section */}
            <div className='bg-base-200 pb-24'>
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className='text-4xl md:text-6xl font-black text-center pt-24 tracking-tight text-slate-800'>
                        Trending Apps
                    </h1>
                    <p className='text-center text-lg md:text-xl text-slate-500 mt-4 font-medium mb-16 max-w-2xl mx-auto'>
                        Discover the most popular apps in the market, curated for peak performance.
                    </p>

                    {/* Smart Responsive Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center'>
                        {
                            sliceApps?.map(app => <AppsCard key={app.id} data={app} />)
                        }
                    </div>
                </div>
                <NavLink 
  to='/apps' 
  className="
    group relative flex items-center justify-center 
    w-56 h-14 mx-auto mt-16 
    bg-violet-600 hover:bg-violet-700 
    text-white text-lg font-bold tracking-wide
    rounded-2xl shadow-lg shadow-violet-200 
    transition-all duration-300 active:scale-95
    overflow-hidden
  "
>
  {/* Subtle Background Glow Effect on Hover */}
  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  
  <span className="relative flex items-center gap-2">
    Show All 
    {/* Arrow icon that moves slightly on hover */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>
</NavLink>
            </div>
        </div>
    );
};

export default Home;