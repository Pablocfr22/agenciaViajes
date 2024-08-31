import React from "react"
import '../css/Historia.css'
import { useState,useEffect } from "react"
const colores=["red","black","yellow","#72ffff","blue","#5800ff"]

function Subtitulo(props){

    const[colors,setColors]=useState(0);
    useEffect(()=>{

        const interval= setInterval(() => {
            setColors(prevIndex=>(prevIndex+1)% colores.length);
            
        }, 1000);

        return() =>clearInterval(interval);
    },[])

    return(
        <div className='Subtitulo'>
            <h2 className='h2-subtitulo' style={{color:colores[colors]}}>
                {props.texto}</h2>
        </div>
    )
}

export default Subtitulo