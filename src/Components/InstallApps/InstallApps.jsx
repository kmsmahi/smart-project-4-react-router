import React from 'react';

const InstallApps = ({ app, onUninstall }) => {
    const { image, title, ratingAvg, downloads, size } = app || {};

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 transition-all hover:border-violet-300 hover:shadow-md">
            <div className="flex flex-row items-center justify-between gap-4">
                
                {/* 1. Identity & Info (Main Group) */}
                <div className="flex items-center gap-4 min-w-0"> 
                    {/* min-w-0 prevents text overflow from breaking the flexbox */}
                    <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-slate-50 p-3 border border-slate-100 flex items-center justify-center">
                            <img src={image} alt={title} className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm"></div>
                    </div>

                    <div className="flex flex-col min-w-0">
                        <h3 className="text-lg font-bold text-slate-900 truncate uppercase tracking-tight">
                            {title}
                        </h3>
                        {/* Stats inline for a smarter, more compact professional look */}
                        <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                                <span className="text-amber-500">★</span> {ratingAvg}
                            </span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="text-xs font-bold text-slate-500 uppercase">
                                {size} MB
                            </span>
                        </div>
                    </div>
                </div>

                {/* 2. Action Buttons (Far Right) */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <button className="px-5 py-2 bg-black hover:bg-violet-600 text-white rounded-lg font-bold text-xs transition-all active:scale-95">
                        Uninstall
                    </button>
                    
                    
                </div>

            </div>
        </div>
    );
};

export default InstallApps;