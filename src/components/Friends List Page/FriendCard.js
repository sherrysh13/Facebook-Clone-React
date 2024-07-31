import React, { useState } from 'react'
import './FriendCard.css'
import { BsPersonCheckFill } from "react-icons/bs";


const FriendCard = ({image, name, followers}) => {

  const [isFriend, setIsFriend] = useState(false)

  return (
    <>
        <div className="reqBox">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="name">
            <h2>{name}</h2>
          </div>
          <div className="followers">
            <p>{followers}</p>
          </div>
          <div className="buttons">
            {
              isFriend ? (
                <>
                  <button className='btn3'><h3><BsPersonCheckFill /> Friends</h3></button>
                  <button className='btn4' onClick={() => setIsFriend(false)}> <h3>Remove Friend</h3></button>
                </>
              ) : (
                <>
                  <button className='btn1' onClick={() => setIsFriend(true)}>
                  <h3>Add Friend</h3>
                </button>
                <button className='btn2'>
                  <h3>Remove</h3>
                </button>
                </>
              )
            }
            
          </div>
        </div>
    </>

  )
}

export default FriendCard