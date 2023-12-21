import React, { useState } from 'react';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Carousel() {
    const[index,setIndex] = useState(0);
    let data =[
        {
            id:1,
            url:img1
        },
        {
            id:2,
            url:img2
        },
        {
            id:3,
            url:img3
        },
        {
            id:4,
            url:img4
        },
        {
            id:5,
            url:img5
        },
    ]
     //console.log(0)

     let eachImage= [data[index]];
        let prevHandler =()=>{
            if(index<=0){
                setIndex(data.length);
            }
            setIndex((prev)=>prev-1);

        }
        let nextHandler =()=>{
            if(index >= data.length-1){
                setIndex(-1)
            }
            setIndex((prev)=>prev+1);

        }

     return(
     <div>
        {
            eachImage.map((item) =>(
                <center><img src={item.url} alt="" width={300} height={300}/></center>
            ))
        }
  
     
     <div className='btns'>
        <center>
        <button onClick={prevHandler}>prev</button>
        <button onClick={nextHandler}>next</button>
        </center>
        
     </div>
     <footer className='footer'>
        <div>
            <FaFacebookF/>
            <br></br>
            <FaInstagram/>
        </div>
     </footer>
     </div>
     
     

     ) 
}


export default Carousel