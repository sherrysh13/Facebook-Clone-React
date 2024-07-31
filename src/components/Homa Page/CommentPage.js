import React, { useState } from 'react'
import commentPic1 from '../images/commentPic1.webp'
import commentPic2 from '../images/commentPic2.avif'
import commentPic3 from '../images/commentPic3.avif'
import mypic from '../images/mypic.JPG'
import { RiEmotionHappyLine } from "react-icons/ri";
import { MdPhoto } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { IoHeart } from "react-icons/io5";
import { BsFillEmojiAngryFill } from "react-icons/bs";
import { FaFaceSadTear } from "react-icons/fa6";
import { FaFaceLaughSquint } from "react-icons/fa6";
import { ImShocked2 } from "react-icons/im";
import { BiSolidDislike } from "react-icons/bi";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaReplyAll } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom'


const CommentPage = () => {

  let navigate = useNavigate();

  const crossBtnHandler = () => {
    navigate(-1)
  }

  const [newComment, setNewComment] = useState("")

  const [comments, setComments] = useState([
    {
      id: 1,
      image: commentPic1,
      name: "Noah",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      replies: []
    },
    {
      id: 2,
      image: commentPic2,
      name: "George",
      text: "WOW AMAZING 😍",
      replies: []
    },
    {
      id: 3,
      image: commentPic3,
      name: "Lily",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe possimus unde distinctio esse quae tempora amet illum accusantium excepturi voluptas doloremque sed eos natus quibusdam, ipsam quod dolorem? Quidem reprehenderit, quae, ullam minima vitae commodi iure, consequatur autem asperiores necessitatibus obcaecati ad voluptatibus nisi non possimus id ratione minus.",
      replies: []
    },
  ]);

  const addCommentHandler = () => {
    if (newComment.trim() !== ""){
      const newCommentObj = {
        id: comments.length + 1,
        image: mypic,
        name: "Sherry Sheikh",
        text: newComment,
        replies: []
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleReactionIconClick = (commentId, reaction) => {
    setComments(
      comments.map(comment =>
        comment.id === commentId ? { ...comment, reaction } : comment
      )
    );
    setReactionIconsVisible(false);
    setCurrentCommentId(null);
  };

  const [reactionIconsVisible, setReactionIconsVisible] = useState(false);
  const [currentCommentId, setCurrentCommentId] = useState(null);

  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const toggleReactionIcons = (commentId) => {
    if (reactionIconsVisible && currentCommentId === commentId) {
      setReactionIconsVisible(false);
      setCurrentCommentId(null);
    } else {
      setReactionIconsVisible(true);
      setCurrentCommentId(commentId);
    }
  };

  const handleReplyClick = (commentId) => {
    setReplyingTo(commentId);
  };

  const handleAddReply = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: comment.replies.length + 1,
                  image: mypic,
                  name: "Sherry Sheikh",
                  text: replyText,
                },
              ],
            }
          : comment
      )
    );
    setReplyingTo(null);
    setReplyText("");
  };


  return (
    <>
      <div className="commentPageContainer">
        <div className="crossButton" onClick={crossBtnHandler}>
          <div>
            <ImCross className='crossIcon'/>
          </div>
        </div>
        <div className="allComments">
          {
            comments.map((comment) => {
              return(
                <div className="commentContainer" key={comment.id}>
                  <div className="comments">
                    <div className="profileImg">
                      <img src={comment.image} alt="" />
                    </div>
                    <div className="commentBox">
                      <div className="profile">
                        <h3>{comment.name}</h3>
                      </div>
                      <div className="comment">
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  </div>
                  <div className="btns">
                    <div className="like" onClick={() => toggleReactionIcons(comment.id)}>
                      {comment.reaction || <BiSolidLike />}
                      <h4>{comment.reaction ? comment.reaction.props.name : "Like"}</h4>
                    </div>
                    <div className="reply" onClick={() => handleReplyClick(comment.id)}>
                      <div className="replyIcon">
                        <FaReplyAll />
                      </div>
                      <h4>Reply</h4></div>
                  </div>
                  {reactionIconsVisible && currentCommentId === comment.id && (
                    <div className='reactionIcons'>
                      <BiSolidLike className='icon like' onClick={() => handleReactionIconClick(comment.id, <BiSolidLike name="Like" />)} />
                      <IoHeart className='icon heart' onClick={() => handleReactionIconClick(comment.id, <IoHeart name="Love" />)} />
                      <BsEmojiHeartEyesFill className='icon lovely' onClick={() => handleReactionIconClick(comment.id, <BsEmojiHeartEyesFill name='Lovely' />)} />
                      <FaFaceLaughSquint className='icon laugh' onClick={() => handleReactionIconClick(comment.id, <FaFaceLaughSquint name='Laugh' />)} />
                      <ImShocked2 className='icon wonder' onClick={() => handleReactionIconClick(comment.id, <ImShocked2 name='Wonder' />)} />
                      <BsFillEmojiAngryFill className='icon angry' onClick={() => handleReactionIconClick(comment.id, <BsFillEmojiAngryFill name='Angry' />)} />
                      <FaFaceSadTear className='icon sad' onClick={() => handleReactionIconClick(comment.id, <FaFaceSadTear name='Sad' />)} />
                      <BiSolidDislike className='icon dislike' onClick={() => handleReactionIconClick(comment.id, <BiSolidDislike name='Dislike' />)} />
                    </div>
                  )}
                  {replyingTo === comment.id && (
                    <div className="replyContainer">
                      <input
                        type="text"
                        placeholder="Write your reply here..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <div onClick={() => handleAddReply(comment.id)}>
                        <IoSend className='sendIcon'/>
                      </div>
                    </div>
                  )}
                  {comment.replies.map((reply) => (
                    <div className="replyCommentContainer" key={reply.id}>
                      <div className="comments">
                        <div className="profileImg">
                          <img src={reply.image} alt="" />
                        </div>
                        <div className="commentBox">
                          <div className="profile">
                            <h3>{reply.name}</h3>
                          </div>
                          <div className="comment">
                            <p>{reply.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            })
          }
        </div>
        <div className="doComment">
          <img src={mypic} alt="" />
          <input type="text" placeholder='Write your comment here...' value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
          <RiEmotionHappyLine className='icon emoji'/>
          <MdPhoto className='icon gallery'/>
          <IoSend className='icon sendComment' onClick={addCommentHandler}/>
        </div>
      </div>
    </>
  )
}

export default CommentPage