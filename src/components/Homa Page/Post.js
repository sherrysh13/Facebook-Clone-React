import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSolidLike } from "react-icons/bi";
import { IoHeart } from "react-icons/io5";
import { BsFillEmojiAngryFill } from "react-icons/bs";
import { FaFaceSadTear } from "react-icons/fa6";
import { FaFaceLaughSquint } from "react-icons/fa6";
import { ImShocked2 } from "react-icons/im";
import { BiSolidDislike } from "react-icons/bi";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { IoEarth } from "react-icons/io5";
import { FaComment } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosShareAlt } from "react-icons/io";


const Post = ({image, name, date, title, post}) => {

    const [selectedReaction, setSelectedReaction] = useState(null)

    let navigate = useNavigate()

    let reactionIconsRef = useRef("")
    let flag = 1;

    const likeBtnHandler = () => {
        if(flag){
            reactionIconsRef.current.style.display = "block";
            flag = 0;
        }else{
            reactionIconsRef.current.style.display = "none";
            flag = 1;
        }
    }
    
    const commentBtnHandler = () => {
        navigate("/commentPage")
    }

    const handleReactionIconClick = (reaction) => {
        setSelectedReaction(reaction)
        reactionIconsRef.current.style.display = "none";
        flag = 1;
    }
  return (
    <>
        <div className="postBox">
            <div className="postHeading">
                <div className="image">
                    <img src={image} alt="" className='profilePic'/>
                </div>
                <div className="name">
                    <h3>{name}</h3>
                    <p>{date} <IoEarth /></p>
                </div>
            </div>
            <div className="postTitle">
                {title}
            </div>
            <div className="postImage">
                <img src={post} alt="" />
            </div>
            <hr />
            <div className="reactionBtns">
                <div className="btn likeBtn" onClick={likeBtnHandler}>
                    {selectedReaction || <BiSolidLike />}
                    <h4>{selectedReaction ? selectedReaction.props.name : "Like"}</h4>
                </div>
                <div className="btn commentBtn" onClick={commentBtnHandler}>
                    <FaComment />
                    <h4>Comment</h4>
                </div>
                <div className="btn">
                    <IoLogoWhatsapp />
                    <h4>Send</h4>
                </div>
                <div className="btn">
                    <IoIosShareAlt />
                    <h4>Share</h4>
                </div>                        
            </div>
            <div className='reactionIcons' ref={reactionIconsRef}>

                <BiSolidLike className='icon like' onClick={() => handleReactionIconClick(<BiSolidLike name="Like" />)}/>
                <IoHeart className='icon heart' onClick={() => {handleReactionIconClick(<IoHeart name="Love" />)}}/>
                <BsEmojiHeartEyesFill className='icon lovely' onClick={() => handleReactionIconClick(<BsEmojiHeartEyesFill name='Lovely'/>)}/>
                <FaFaceLaughSquint className='icon laugh' onClick={() => handleReactionIconClick(<FaFaceLaughSquint name='Laugh'/>)}/>
                <ImShocked2 className='icon wonder' onClick={() => handleReactionIconClick(<ImShocked2 name='Wonder' />)}/>
                <BsFillEmojiAngryFill className='icon angry' onClick={() => handleReactionIconClick(<BsFillEmojiAngryFill name='Angry' />)}/>
                <FaFaceSadTear className='icon sad' onClick={() => handleReactionIconClick(<FaFaceSadTear name='Sad' />)}/>
                <BiSolidDislike className='icon dislike' onClick={() => handleReactionIconClick(<BiSolidDislike name='Dislike' />)}/>
            </div>
        </div>
    </>
  )
}

export default Post