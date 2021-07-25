import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Spinner } from './Spinner';

const fetchrandomdata=()=>{
    return axios.get('https://randomuser.me/api')
    .then(({data})=>{
           return (
               JSON.stringify(data, null, 2)
            );
    })
    .catch(err=>{
        console.error(err);
    })
}
export default function Apitesting() {
    const [loading,setloading]=useState(false);
    const[randomuserdatajson,setrandomuserdata]=useState('');
    useEffect(()=>{
        fetchrandomdata().then(randomdata=>{
            setrandomuserdata(randomdata)
            setloading(true)
        })
    },[])
    const text=loading ? randomuserdatajson :  <Spinner/>;
    return (
        <div>
            <pre>{text}</pre>
        </div>
    )
}

