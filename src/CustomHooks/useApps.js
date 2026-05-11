import {  useEffect, useState } from "react";

const useApps=()=>{
    const [apps,setapps]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error, setError]=useState(null);
    useEffect(()=>{
        fetch('../AppsData.json')
        .then(res=>res.json())
        .then(data=>setapps(data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))      
    },[])
    return {apps,loading,error};
}
export default useApps;