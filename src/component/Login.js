import React , {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function Login(){

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate.push("./add")
        }
    
    },[])
    const navigate = useNavigate();
    return(
    <div>
    <Header/>
    <h1> Login Component </h1>
    </div>
    )
}