import React, { useState,useEffect } from 'react';
import "./style.css";
import Popup from 'reactjs-popup';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const[data,setData] = useState (null);
    const [localdata, setlocalstorage] = useState(getlocaldata());
    let navigate = useNavigate();

    function getlocaldata () {
        let localget = JSON.parse(localStorage.getItem("Main_Question"));
        if (localget) {
          return localget;
        } else {
          return [];
        }
      }
     
    const handleChange = (e) => {
       setData(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(data === null) {
           
            return;
        } else {
           
            console.log(data);
            let addnew = { id: new Date().getTime().toString(), data };
            setlocalstorage([...localdata, addnew]);
            setTimeout(() => {
                navigate("/main");
            }, 302);
          
        }
    }
    useEffect(() => {
        localStorage.setItem("Main_Question", JSON.stringify(localdata));
      }, [localdata]);

    
    
  return (
    <div className="wrapper">
            <Popup trigger={ <button type="button" className="btn btn-primary">Question</button>}
                position="right center">
                    <div> 
                        <input type="text" placeholder='Type Question' onChange={handleChange} /> <br />
                        <button type='submit' className='btn btn-primary' onClick={handleClick}> Submit </button>
                    </div>
            </Popup>
             
    </div>
   
  )
}

export default Home