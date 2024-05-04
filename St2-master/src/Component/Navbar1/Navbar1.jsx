import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css'
import bg1 from '/pp1.png';
import { useNavigate } from 'react-router-dom';
// import { listitem } from "../../Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Navbar1 = ()=>{
    const navigate = useNavigate();
    const handleCart = ()=>{
        navigate('/addcart')
    }
    return(
        <>
        <div className="Navwrapper">
            <div className="Navcontainer">
                <div className="Navlogodiv">
                    <div className="Navlogoimg">
                        <img src={bg1} />
                    </div>
                    <div className="Navlogotext">
                    <span>ReelBite:</span>
                    <span>Cinematic Cravings</span>
                    </div>      
                </div>
                <div className="Navheaderdiv">
                    <ul>
                        <li><Link to='/' style={{ textDecoration: "none", color:"#F4FEFC" }}>Home</Link></li>
                        <li><Link to='/movies' style={{ textDecoration: "none" , color:"#F4FEFC" }}>Movies</Link></li>
                        <li><Link to='/about' style={{ textDecoration: "none" , color:"#F4FEFC" }}>About</Link></li>
                        <li><Link to='/contact' style={{ textDecoration: "none" , color:"#F4FEFC" }}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="NavSearchdiv">
                    <div className="NavSearchcont">
                        <input type="text" placeholder="Search..... "/>
                        <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                       
                    </div>
                    <div className='cart1'>
                        <Link to='/addcart'><span style={{color:"white"}}  ><FontAwesomeIcon icon={faCartShopping} /></span></Link>
                        
                 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar1;