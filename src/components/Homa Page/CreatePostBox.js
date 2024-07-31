import React, { useState } from 'react'
import { ImCross } from "react-icons/im";


const CreatePostBox = ({ setisCreatePostOpen, onCreatePost }) => {

    const [postContent, setPostContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handlePostContentChange = (event) => {
      setPostContent(event.target.value);
    };
  
    const handleImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
      }
    };
  
    const handleCreatePost = () => {
      if (!postContent && !selectedImage) {
        alert('Please add some content or select an image for your post.');
        return;
      }
  
      onCreatePost(postContent, selectedImage); 
      setPostContent(''); 
      setSelectedImage(null);
      setisCreatePostOpen(false); 
    };
  
    const crossBtnHandler = () => {
        setisCreatePostOpen(false)
    }

  return (
    <>
        <div className="createPostContainer">
            <div className="createPostBox">
                <div className="heading">
                    <h2>Create Post</h2>
                    <div className="crossBtn" onClick={crossBtnHandler}>
                        <ImCross />
                    </div>
                    <hr />
                    <br />
                </div>
                <div className="body">
                    <textarea rows={10} cols={10} name="" id="" placeholder="What's in your mind Sherry ?" value={postContent} onChange={handlePostContentChange} />
                    <div className="uploadImage">
                        <input type="file" accept="image/*" onChange={handleImageChange}/>
                    </div>
                    <button className='postBtn' onClick={handleCreatePost}>POST</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreatePostBox