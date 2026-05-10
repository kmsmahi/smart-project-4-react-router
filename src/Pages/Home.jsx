import React from 'react';
import Banner from '../Components/Banner/Banner';
import AppsCard from '../Components/AppsCard/AppsCard';
import useApps from '../CustomHooks/useApps';

const Home = () => {
    const {apps,loading,error}=useApps();
    if (loading) {
        return <div className="min-h-screen flex items-center justify-center font-bold text-violet-600">Loading productive tools...</div>;
    }
     if (error) {
        return <div className="text-red-500 text-center mt-20">Error: {error}</div>;
    }
    return <>
        <div>
            <Banner></Banner>
            <div className='bg-base-200'>
                <h1 className='text-6xl font-bold flex justify-center items-center pt-20'>Trending Apps</h1>
                <p className='text-center text-2xl  text-gray-600 mt-5 font-semibold mb-10'>Discover the most popular apps in the market</p>
            <div className='grid grid-cols-4 gap-4'>
                {
                apps?.map(app=><AppsCard key={app.id} data={app}></AppsCard>)
            }
            </div>
            </div>
            
        </div>
    </>;
};

export default Home;