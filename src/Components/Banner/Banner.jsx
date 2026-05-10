import React from 'react';

const Banner = () => {
    return (
        <div className="flex flex-col items-center pt-20 bg-gradient-to-b from-slate-50 to-violet-50 min-h-screen">
            
            {/* Hero Section */}
            <div className="hero-content text-center px-4 md:px-16">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                        We build <span className="text-violet-600">productive</span> apps
                    </h1>
                    <p className="py-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Explore a curated collection of 20+ high-performance tools designed to elevate your digital workflow. Install, manage, and evolve.
                    </p>
                    
                    {/* Store Buttons */}
                    <div className='flex flex-wrap gap-4 justify-center'>
                        <button className="btn btn-outline border-slate-300 hover:bg-slate-100 text-slate-700 px-6 h-14 rounded-2xl transition-all">
                            <img width="24" height="24" src="https://img.icons8.com/fluency/48/google-play-store-new.png" alt="GP" />
                            <span className="ml-2 font-semibold">Google Play</span>
                        </button>
                        <button className="btn btn-outline border-slate-300 hover:bg-slate-100 text-slate-700 px-6 h-14 rounded-2xl transition-all">
                            <img width="24" height="24" src="https://img.icons8.com/color/48/apple-app-store--v3.png" alt="AS" />
                            <span className="ml-2 font-semibold">App Store</span>
                        </button>
                    </div>

                    {/* Main Hero Image with Floating Effect */}
                    <div className='mt-16 flex justify-center p-8 bg-white/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 hover:shadow-violet-300 transition-shadow'>
                        <img 
                            src="/assets/hero.png" 
                            alt="Dashboard Preview" 
                            className="rounded-3xl shadow-2xl border border-white/50 w-full max-w-5xl hover:scale-[1.01] transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Stats Section - Zero Gap approach */}
            <div className="bg-violet-700 w-full mt-20 py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <p className='text-3xl md:text-4xl text-white font-bold text-center mb-12 tracking-tight'>
                        Trusted by millions, built for you
                    </p>
                    
                    {/* Responsive Grid for Stats */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-white'>
                        <div className='flex flex-col items-center text-center space-y-2'>
                            <p className="text-violet-200 uppercase tracking-widest text-sm font-bold">Total Downloads</p>
                            <p className='font-black text-6xl'>10M+</p>
                            <p className="text-violet-200/80 text-sm">21% increase this month</p>
                        </div>
                        
                        <div className='flex flex-col items-center text-center space-y-2 border-y md:border-y-0 md:border-x border-violet-500/50 py-8 md:py-0'>
                            <p className="text-violet-200 uppercase tracking-widest text-sm font-bold">Total Reviews</p>
                            <p className='font-black text-6xl'>4.8/5</p>
                            <p className="text-violet-200/80 text-sm">Based on 10,000+ ratings</p>
                        </div>
                        
                        <div className='flex flex-col items-center text-center space-y-2'>
                            <p className="text-violet-200 uppercase tracking-widest text-sm font-bold">Active Apps</p>
                            <p className='font-black text-6xl'>20+</p>
                            <p className="text-violet-200/80 text-sm">Continuously updated</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;