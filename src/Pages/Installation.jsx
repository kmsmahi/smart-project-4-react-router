import { useEffect, useState } from "react";
import InstallApps from "../Components/InstallApps/InstallApps";

const Installation = () => {
    const [install, setInstall] = useState([]);
    const [sort, setSort] = useState('none');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        const savedList = JSON.parse(localStorage.getItem('install')) || [];      
        setTimeout(() => {
            setInstall(savedList);
            setIsLoading(false); 
        }, 1500);
    }, []);

    const handleUninstall = (id) => {
        const updatedList = install.filter(app => app.id !== id);
        setInstall(updatedList);
        localStorage.setItem('install', JSON.stringify(updatedList));
    };
    const getSortedApps = () => {
        let sortedList = [...install];
        if (sort === 'low-to-high') return sortedList.sort((a, b) => a.size - b.size);
        if (sort === 'high-to-low') return sortedList.sort((a, b) => b.size - a.size);
        return sortedList;
    };

    const displayApps = getSortedApps();
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
                <div className="flex flex-col items-center gap-4 animate-pulse">
                    <div className="w-16 h-16">
                        <img className="w-full h-full object-contain" src="../assets/logo.png" alt="Logo" />
                    </div>
                    <h2 className="text-2xl font-black text-violet-600 tracking-tight">
                        Loading productive tools...
                    </h2>
                    
                    <div className="w-8 h-8 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    
    return (
        <div className="flex flex-col flex-1 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                <div className="flex flex-col items-center text-center mt-12 mb-16 gap-4 py-12 rounded-3xl border border-slate-100 ">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Your <span className="text-violet-500">Installed</span> Apps
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
                        Manage and explore your personalized collection of high-performance tools.
                    </p>
                </div>

                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-6 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <h2 className="text-lg font-bold text-slate-800">
                            {install.length} <span className="text-slate-600 font-medium">apps currently <span className="text-green-500 font-bold text-2xl">Active</span></span>
                        </h2>
                    </div>

                    <div className="relative inline-block w-full sm:w-64">
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="block w-full appearance-none bg-white border border-slate-200 text-slate-700 py-3 px-4 pr-10 rounded-xl font-bold text-sm focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all cursor-pointer"
                        >
                            <option value="none">Sort: Default</option>
                            <option value="low-to-high">Size: Low to High</option>
                            <option value="high-to-low">Size: High to Low</option>
                        </select>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {displayApps.length > 0 ? (
                        displayApps.map(app => (
                            <InstallApps 
                                key={app.id} 
                                app={app} 
                                onUninstall={handleUninstall} 
                            />
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