import React from 'react';
import useApps from '../CustomHooks/useApps';
import AppsCard from '../Components/AppsCard/AppsCard';

const Apps = () => {
    const { apps, loading, error } = useApps();
    if (loading) {
        return <div className="min-h-screen flex items-center justify-center font-bold text-violet-600 bg-slate-50">Loading productive tools...</div>;
    }
    
    if (error) {
        return <div className="text-red-500 text-center mt-20">Error: {error}</div>;
    }
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
    
    {/* Left Side: Dynamic Counter */}
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

    {/* Right Side: Professional Search Input */}
    <div className="relative w-full md:w-80 group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <input 
            type="text" 
            placeholder="Search applications..." 
            className="w-full pl-11 pr-4 py-3 bg-slate-100 border-none focus:ring-2 focus:ring-violet-500/20 focus:bg-white rounded-xl text-slate-700 placeholder:text-slate-400 placeholder:font-medium transition-all outline-none"
        />
        {/* Pro Touch: KBD Shortcut hint (Visible on Desktop) */}
        <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-3">
            <kbd className="kbd kbd-sm bg-white border-slate-200 text-slate-400">⌘K</kbd>
        </div>
    </div>
</div>
                    {/* Smart Responsive Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mt-12'>
                        {
                            apps?.map(app => <AppsCard key={app.id} data={app} />)
                        }
                    </div>
                </div>
            </div>
    );
};

export default Apps;