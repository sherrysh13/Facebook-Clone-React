import React, { useState } from 'react'
import './Home.css'
import Navbar from './Navbar';
import Story from './Story';
import Post from './Post';
import CreatePostBox from './CreatePostBox';
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { RxCountdownTimer } from "react-icons/rx";
import { HiBookmark } from "react-icons/hi";
import { BiSignal4 } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import mypic from '../images/mypic.JPG'
import pic from '../images/pic.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpeg'
import pic5 from '../images/pic5.webp'
import status from '../images/status.jpg'
import status2 from '../images/status2.jpg'
import randomPic10 from '../images/randomPic10.jpg'
import randomPic7 from '../images/randomPic7.avif'
import randomPic6 from '../images/randomPic6.avif'
import randomPic8 from '../images/randomPic8.avif'
import status3 from '../images/status3.jpg'
import status4 from '../images/status4.webp'
import status5 from '../images/status5.jpg'
// import groupBg from '../images/groupBg.webp'
import lion from '../images/lion.jpg'
import house from '../images/house.jpg'
import hacking from '../images/hacking.jpg'
import me from '../images/me.JPG'
import zafir from '../images/zafir.JPG'



const Home = () => {

    const [isCreatePostOpen, setisCreatePostOpen] = useState(false)

    const [postData, setPostData] = useState(
        [
            {
                image: pic3,
                name: "Hacking Hub",
                date: "5h",
                title: "Hacking is when someone breaks into computers or networks to steal info or cause damage. Cybersecurity helps protect against these attacks by using strong passwords, antivirus software, and staying alert online. It’s important to learn about cybersecurity to keep our digital lives safe.",
                post: hacking
            },
            {
                image: pic4,
                name: "Animal Plannet",
                date: "11h",
                title: "Lions are amazing big cats known as the 'king of the jungle.' They live in groups called prides, which can have up to 30 lions. Male lions have majestic manes, while females, called lionesses, do the hunting. Lions are strong and can run up to 50 miles per hour, but they mostly rest and sleep for about 20 hours a day. They roar to communicate with each other, and their roar can be heard up to 5 miles away. Sadly, lions are endangered due to habitat loss and poaching, so it's important to protect them.",
                post: lion
            },
            {
                image: pic,
                name: "MotoSports",
                date: "13Jun",
                title: "The Ninja H2R is an incredible motorcycle that’s all about speed and power. It’s made by Kawasaki and is known as the fastest production bike in the world. The H2R has a supercharged engine that can produce up to 310 horsepower, allowing it to reach speeds over 200 miles per hour. Its sleek design and aerodynamic body make it look futuristic and cool. The Ninja H2R isn’t street-legal, so it’s only for the track. Riding this bike must feel like flying, but it’s super important to wear safety gear and ride responsibly.",
                post: pic
            },
            {
                image: pic5,
                name: "Luxurious LifeStyle",
                date: "22Dec 2022",
                title: "The most luxurious house is like a dream come true. It has huge rooms, amazing views, fancy furniture, and even a private pool and cinema. Living there would be like living in a palace!",
                post: house
            },
            {
                image: randomPic8,
                name: "Luxurious LifeStyle",
                date: "22Dec 2022",
                title: "The most luxurious house is like a dream come true. It has huge rooms, amazing views, fancy furniture, and even a private pool and cinema. Living there would be like living in a palace!",
                post: randomPic8
            },
            {
                image: randomPic10,
                name: "Luxurious LifeStyle",
                date: "22Dec 2022",
                title: "The most luxurious house is like a dream come true. It has huge rooms, amazing views, fancy furniture, and even a private pool and cinema. Living there would be like living in a palace!",
                post: randomPic10
            },
            {
                image: randomPic7,
                name: "Luxurious LifeStyle",
                date: "22Dec 2022",
                title: "The most luxurious house is like a dream come true. It has huge rooms, amazing views, fancy furniture, and even a private pool and cinema. Living there would be like living in a palace!",
                post: randomPic7
            },
            {
                image: randomPic6,
                name: "Luxurious LifeStyle",
                date: "22Dec 2022",
                title: "The most luxurious house is like a dream come true. It has huge rooms, amazing views, fancy furniture, and even a private pool and cinema. Living there would be like living in a palace!",
                post: randomPic6
            }
        ]
    )

    const createPostHandler = () => {
        setisCreatePostOpen(true)
    }

    const storyData = [
        {
            profilePic: mypic,
            statusPic: me,
            profileName: "Your Story"
        },
        {
            profilePic: pic,
            statusPic: status,
            profileName: "MotoSports"
        },
        {
            profilePic: zafir,
            statusPic: zafir,
            profileName: "Zafir Hasan"
        },
        {
            profilePic: pic2,
            statusPic: status2,
            profileName: "Rich Habbits"
        },
        {
            profilePic: pic3,
            statusPic: status3,
            profileName: "Hacking Hub"
        },
        {
            profilePic: pic4,
            statusPic: status4,
            profileName: "Animal Plannet"
        },
        {
            profilePic: pic5,
            statusPic: status5,
            profileName: "Luxurious LifeStyle"
        },
        {
            profilePic: pic,
            statusPic: status,
            profileName: "MotoSports"
        },
        {
            profilePic: zafir,
            statusPic: zafir,
            profileName: "Zafir Hasan"
        },
        {
            profilePic: pic2,
            statusPic: status2,
            profileName: "Rich Habbits"
        },
        {
            profilePic: pic3,
            statusPic: status3,
            profileName: "Hacking Hub"
        },
        {
            profilePic: pic4,
            statusPic: status4,
            profileName: "Animal Plannet"
        },
        {
            profilePic: pic5,
            statusPic: status5,
            profileName: "Luxurious LifeStyle"
        },
        {
            profilePic: pic3,
            statusPic: status3,
            profileName: "Luxurious LifeStyle"
        },
    ]


    const handleCreatePost = (postContent, selectedImage) => {
        
        console.log('Creating post:', postContent, selectedImage);
    
        setPostData([{
          image: mypic,
          name: 'Sherry Sheikh', 
          date: 'Just now', 
          title: postContent.slice(0, 30),
          post: selectedImage
        }, ...postData]);
      };

  return (
    <>
        <div className="homeContainer">
            <Navbar />
            <div className="bodyContainer">
                <div className="leftSide">
                    <div className="list">
                        <br />
                        <div className="listSidebar">
                            <img src={mypic} alt="" className='mainPic'/>
                            <h2>Sherry Sheikh</h2>
                        </div>
                        <br />
                        <br />
                        <div className="listSidebar">
                            <LiaUserFriendsSolid className='friendIcon'/>
                            <h3>Friends</h3>
                        </div>
                        <br />
                        <div className="listSidebar">
                            <RxCountdownTimer className='memoriesIcon'/>
                            <h3>Memories</h3>
                        </div>
                        <br />
                        <div className="listSidebar">
                            <HiBookmark className='savedIcon'/>
                            <h3>Saved</h3>
                        </div>
                        <br />
                        <div className="listSidebar">
                            <HiOutlineUserGroup className='groupsIcon'/>
                            <h3>Groups</h3>
                        </div>
                        <br />
                        <div className="listSidebar">
                            <MdOndemandVideo />
                            <h3>Video</h3>
                        </div>
                        <br />
                        <div className="listSidebar">
                            <HiOutlineBuildingStorefront className='marketplaceIcon'/>
                            <h3>Marketplace</h3>
                        </div>
                        <br />
                        <div className="listSidebar">
                            <BiSignal4 className='adsManagerIcon'/>
                            <h3>Ads Manager</h3>
                        </div>
                        <br />
                        <div className="listSidebar">
                            <FaGamepad className='playGamesIcon'/>
                            <h3>Play Games</h3>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="storiesHeading">
                        <h3>Stories</h3>
                        <a href="#">See all</a>
                    </div>
                    <div className="stories">
                        {
                            storyData.map((story, id) => {
                                return(
                                    <Story
                                    key={id} 
                                    profilePic={story.profilePic} 
                                    statusPic={story.statusPic} 
                                    profileName={story.profileName}/>
                                )
                            })
                        }
                    </div>
                    <div className="createPost">
                        <img src={mypic} alt="" className='mainPic'/>
                        <input type="text" placeholder="What's in your mind, Sherry?" onClick={createPostHandler}/>
                        {
                            isCreatePostOpen && <CreatePostBox setisCreatePostOpen={setisCreatePostOpen} onCreatePost={handleCreatePost}/>
                        }
                        <MdPhoto className='icon galleryIcon'/>
                    </div>
                    <div className="posts">
                        {
                            postData.map((posts, id) => {
                                return(
                                    <Post
                                    key={id}
                                    image={posts.image}
                                    name={posts.name}
                                    date={posts.date}
                                    title={posts.title}
                                    post={posts.post}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="rightSide">
                    <h3>Suggested</h3>
                    <br />
                    <div className="groupsBox">
                        <div className="heading">
                            <HiOutlineUserGroup />
                            <h4>Groups</h4>
                        </div>
                        <div className="subHeading">
                            <p>New ways to find and <br /> join communities</p>
                            <button>Find Your Groups</button>
                        </div>
                    </div>
                    <div className="createNewGroup">
                        <h3><FaPlus /></h3>
                        <h4>Create New Group</h4>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home

// search icon abhi sae ni hua 
// gallery py click krny click krny sy ... 
// posts pri hui hyn 