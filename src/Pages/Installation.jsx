import { useEffect, useState } from "react";
import InstallApps from "../Components/InstallApps/InstallApps";

const Installation = () => {
    const [install, setInstall] = useState([]);
    const [sort, setSort] = useState('none');

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('install')) || [];
        setInstall(savedList);
    }, []);

    // LOGIC: Determine which list to display
    const getSortedApps = () => {
        let sortedList = [...install]; // Create a copy
        if (sort === 'low-to-high') {
            return sortedList.sort((a, b) => a.size - b.size);
        } else if (sort === 'high-to-low') {
            return sortedList.sort((a, b) => b.size - a.size);
        }
        return sortedList; // Return original if 'none'
    };

    const displayApps = getSortedApps();

    return (
        <div className="flex flex-col flex-1 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center mt-12 mb-16 gap-4 py-12 rounded-3xl border border-slate-100 bg-white shadow-sm">
                    
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Your Installed Apps
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
                        Manage and explore your personalized collection of high-performance tools.
                    </p>
                </div>

                {/* Utilities Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-6 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <h2 className="text-lg font-bold text-slate-800">
                            {install.length} <span className="text-slate-600 font-medium">apps currently active</span>
                        </h2>
                    </div>

                    <div className="relative inline-block w-full sm:w-64">
                        <select
                            id="sort-apps"
                            value={sort} // FIXED: Use the state 'sort', not 'setSort'
                            onChange={(e) => setSort(e.target.value)}
                            className="block w-full appearance-none bg-white border border-slate-200 text-slate-700 py-3 px-4 pr-10 rounded-xl font-bold text-sm focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all cursor-pointer"
                        >
                            <option value="none">Sort: Default</option>
                            <option value="low-to-high">Size: Low to High</option>
                            <option value="high-to-low">Size: High to Low</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>

                {/* Grid Layout for Apps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {displayApps.length > 0 ? (
                        displayApps.map(app => (
                            <InstallApps key={app.id} app={app} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-slate-400 font-bold text-xl">
                            No apps installed yet.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Installation;