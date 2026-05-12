import React from 'react';
import { Link } from 'react-router';

const AppsCard = ({ data }) => {
    const { image, title, companyName, ratingAvg, downloads, description } = data || {};

    return (
        <Link to={`/appsDetails/${data.id}`} className="card bg-white w-full max-w-[320px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
            <figure className="px-6 pt-6">
                <div className="w-full aspect-square rounded-2xl bg-slate-50 flex items-center justify-center p-4 overflow-hidden border border-slate-50">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </figure>

            <div className="card-body p-6">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-xl font-bold text-slate-800 leading-tight">
                        {title}
                    </h2>
                    <div className="badge badge-secondary font-bold text-xs">★ {ratingAvg}</div>
                </div>
                <p className="text-sm text-slate-500 line-clamp-2 my-2 min-h-[40px]">
                    {description}
                </p>

                <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-slate-50">
                    <div className="flex flex-col">
                         <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Developer</span>
                         <span className="text-sm font-semibold text-violet-600">{companyName}</span>
                    </div>
                    <div className="badge badge-outline border-slate-200 text-slate-500 font-medium">
                        {downloads >= 1000000 ? `${(downloads / 1000000).toFixed(1)}M` : downloads}
                    </div>
                </div>
            </div>
        </Link>
       
        
    );
    
};

export default AppsCard;