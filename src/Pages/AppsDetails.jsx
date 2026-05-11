import React from 'react';
import { useParams } from 'react-router';
import useApps from '../CustomHooks/useApps';
import RatingsChart from '../Components/RatingsChart/RatingsChart';
const AppsDetails = () => {
    const {id}=useParams();
    console.log(id);
    const { apps } = useApps();
    const singleapp=apps.find(app=>String(app.id)===id);
    console.log(singleapp);
     const { image, title, companyName,reviews, ratingAvg,size, downloads, broad_description } = singleapp || {};
    return (
        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row gap-16">
    <img
      src={image}
      className="max-w-sm rounded-2xl shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <h2 className="text-2xl font-semibold mt-3">Developed by: <span className='text-violet-500'>{companyName}</span></h2>
      <hr className="my-6 h-px border-1 bg-slate-200" />

      <div className='flex   gap-8'>
        <div>
            <img src="/src/assets/icon-downloads.png" alt="" />
            <p className='text-gray-500 mt-1'>Downloads</p>
            <p className='text-4xl font-semibold '>{downloads}</p>
        </div>
        <div>
            <img src="/src/assets/icon-ratings.png" alt="" />
            <p className='text-gray-500 mt-1'>Rating</p>
            <p className='text-4xl font-semibold '>{ratingAvg}</p>
        </div>
        <div>
            <img src="/src/assets/icon-review.png" alt="" />
            <p className='text-gray-500 mt-1'>Reviews</p>
            <p className='text-4xl font-semibold '>{reviews}</p>
        </div>
      </div>
      <button className="btn btn-success mt-10"><span className='p-2 text-white text-xl'>Install Now ({size} MB)</span></button>
      <div>
        <RatingsChart ratings={singleapp?.ratings || []}></RatingsChart>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-bold mt-10 mb-4'>About this app</h2>
        <p className='text-gray-600'>{broad_description}</p>
       </div>
      
      </div>
    </div>
    
  </div>

    );
};

export default AppsDetails;