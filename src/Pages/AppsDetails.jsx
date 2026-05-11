import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router';
import useApps from '../CustomHooks/useApps';
import RatingsChart from '../Components/RatingsChart/RatingsChart';
import { useState } from 'react';
const AppsDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useApps();
    const [isInstalled,setInstalled]=useState(false);
    // Safety check for loading state
    if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-violet-600">Loading details...</div>;

    const singleapp = apps.find(app => String(app.id) === id);
    if (!singleapp) return <div className="text-center mt-20 font-bold text-slate-500">App not found.</div>;

    const { image, title, companyName, reviews, ratingAvg, size, downloads, broad_description, ratings } = singleapp;
   

    const installBtnHandler = () => {
        setInstalled(true);
        toast.success(`${title} has been installed successfully!`, {
            position: "top-right",
            autoClose: 3000,
        });

    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <ToastContainer />
            {/* Header Section with Glassy Background */}
            <div className="bg-white border-b border-slate-200 pt-32 pb-12 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center md:items-start">
                    
                    {/* App Icon Container */}
                    <div className="w-48 h-48 rounded-[2.5rem] bg-slate-50 p-8 shadow-inner border border-slate-100 flex items-center justify-center shrink-0">
                        <img src={image} alt={title} className="w-full h-full object-contain" />
                    </div>

                    {/* App Core Info */}
                    <div className="flex-grow text-center md:text-left">
                        <h1 className="text-5xl font-black text-slate-900 tracking-tight">{title}</h1>
                        <p className="text-xl font-bold text-violet-600 mt-2">{companyName}</p>
                        
                        {/* Stats Bar */}
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 mt-8 border-t border-slate-100 pt-8">
                            <div className="text-center">
                                <p className="text-2xl font-black text-slate-800">{ratingAvg} ★</p>
                                <p className="text-xs uppercase font-black text-slate-400 tracking-widest">{reviews} Reviews</p>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="text-center">
                                <p className="text-2xl font-black text-slate-800">{downloads >= 1000000 ? `${(downloads / 1000000).toFixed(1)}M+` : downloads}</p>
                                <p className="text-xs uppercase font-black text-slate-400 tracking-widest">Downloads</p>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="text-center">
                                <p className="text-2xl font-black text-slate-800">{size} MB</p>
                                <p className="text-xs uppercase font-black text-slate-400 tracking-widest">Storage</p>
                            </div>
                        </div>

                        {/* Action Button */}
                       <button 
            // 4. Use the disabled attribute
            disabled={isInstalled}
            className={`btn px-12 h-14 rounded-2xl text-lg font-bold shadow-xl mt-10 transition-all 
                ${isInstalled 
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-700 text-white active:scale-95'
                }`} 
            onClick={installBtnHandler}
        >
            {/* 5. Dynamically change text */}
            {isInstalled ? "Installed" : "Install Now"}
        </button>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
                
                {/* Left Side: About & Description */}
                <div className="lg:col-span-2">
                    <section>
                        <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
                            About this app
                            <span className="h-1 w-12 bg-violet-600 rounded-full inline-block"></span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            {broad_description}
                        </p>
                    </section>

                    {/* Features/Badges placeholder for extra professional touch */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {["Verified Security", "Ad-Free", "Premium Support"].map(tag => (
                            <span key={tag} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 shadow-sm">
                                ✓ {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Side: Ratings Chart */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32">
                        <h2 className="text-2xl font-black text-slate-800 mb-6">Ratings & Reviews</h2>
                        <RatingsChart ratings={ratings || []} />
                        <p className="mt-4 text-center text-sm text-slate-400 font-medium italic">
                            Updated weekly based on verified users
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppsDetails;