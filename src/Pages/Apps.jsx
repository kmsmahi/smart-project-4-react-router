import React, { useState } from 'react';
import useApps from '../CustomHooks/useApps';
import AppsCard from '../Components/AppsCard/AppsCard';
const Apps = () => {
    const { apps, loading, error } = useApps();
    const [search,setSearch]=useState('');
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
    console.log(search);
    const term=search.trim().toLowerCase();
    const filteredApps=term? apps.filter(app=>app.title.toLowerCase().includes(term) ) :apps;
    return (
        <div className='bg-base-200 pb-24'>
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className='text-4xl md:text-6xl font-black text-center pt-24 tracking-tight text-slate-800'>
                        Our All Applications
                    </h1>
                    <p className='text-center text-sm md:text-sm text-slate-500 mt-6 font-medium mb-16 max-w-2xl mx-auto'>
                        Explore our complete collection of high-performance apps, designed to elevate your digital workflow. Install, manage, and evolve with us.
                    </p>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-sm mb-8">
    
    
    <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-100 text-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        </div>
        <div>
            <p className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none">Inventory</p>
            <p className="text-slate-700 font-bold">
                <span className="text-violet-600">{apps?.length || 0}</span> Applications Available
            </p>
        </div>
    </div>

    
    <div className="relative w-full md:w-80 group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <input 
            type="text" 
            placeholder="Search applications..." 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-100 border-none focus:ring-2 focus:ring-violet-500/20 focus:bg-white rounded-xl text-slate-700 placeholder:text-slate-400 placeholder:font-medium transition-all outline-none"
        />
        {/* Pro Touch: KBD Shortcut hint (Visible on Desktop) */}
        <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-3">
            <kbd className="kbd kbd-sm bg-white border-slate-200 text-slate-400">⌘K</kbd>
        </div>
    </div>
</div>
<div className="mt-12">
    {term !== '' && filteredApps.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white/30 backdrop-blur-md rounded-3xl border-2 border-dashed border-slate-200">
            <div className="bg-violet-100 p-4 rounded-full mb-4">
                <div>
                    <img src="../assets/App-Error.png" alt="" />
                </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">No results found</h3>
            <p className="text-slate-500 mt-2 text-center max-w-xs">
                We couldn't find any apps matching <span className="text-violet-600 font-bold italic">"{search}"</span>.
            </p>
            
          
            <button 
                onClick={() => setSearch('')} 
                className="mt-8 px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-100 active:scale-95"
            >
                Clear Search & View All
            </button>
        </div>
    ) : (
        /* Regular Grid */
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center'>
            {filteredApps?.map(app => <AppsCard key={app.id} data={app} />)}
        </div>
    )}
</div>
                </div>
            </div>
    );

};

export default Apps;