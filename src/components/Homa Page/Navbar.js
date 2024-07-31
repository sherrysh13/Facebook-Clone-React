import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoNotifications } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa"
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import mypic from '../images/mypic.JPG'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const [showLogout, setShowLogout] = useState(false)
    const profileHandler = () => {
        setShowLogout(!showLogout)
    }

    let navigate = useNavigate();

  return (
    <>
        <div className="navbar">
            <div className="fbMono">
                <FaFacebook className='fbLogo'/>
                <div className="inputBox">
                    <IoMdSearch className='searchIcon'/>
                    <input type="text" placeholder=' Search Facebook'/>
                </div>
            </div>
            <div className="icons">
                <AiOutlineHome className='icon' onClick={() => navigate("/home")}/>
                <LiaUserFriendsSolid className='icon' onClick={() => navigate("/friends")}/>
                <MdOndemandVideo className='icon'/>
                <FaRegUserCircle className='icon' onClick={() => navigate("/profile")}/>
                <HiOutlineBuildingStorefront className='icon'onClick={() => navigate("/marketplace")}/>
            </div>
            <div className="mostRightIcons">
                <BsGrid3X3GapFill className='icon'/>
                <IoNotifications className='icon'/>
                <FaFacebookMessenger className='icon'/>
                <img src={mypic} alt="" className='mainPic' onClick={profileHandler}/>
                {showLogout && (
                    <div className="logout">
                    <button onClick={() => {navigate('/')}}>Log Out</button>
                    </div>
                )}
            </div>
        </div>
    </>

  )
}

export default Navbar