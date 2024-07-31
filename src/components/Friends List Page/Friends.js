import React from 'react'
import './Friends.css'
import { IoMdSettings } from "react-icons/io";
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { MdPersonAddAlt1 } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from '../Homa Page/Navbar';
import randomPic1 from '../images/randomPic1.webp'
import randomPic2 from '../images/randomPic2.avif'
import randomPic3 from '../images/randomPic3.jpeg'
import randomPic4 from '../images/randomPic4.jpeg'
import randomPic5 from '../images/randomPic5.jpeg'
import randomPic6 from '../images/randomPic6.avif'
import randomPic7 from '../images/randomPic7.avif'
import randomPic8 from '../images/randomPic8.avif'
import randomPic9 from '../images/randomPic9.avif'
import randomPic10 from '../images/randomPic10.jpg'
import randomPic11 from '../images/randomPic11.avif'
import randomPic12 from '../images/randomPic12.avif'
import FriendCard from './FriendCard';
// import randomPic6 from '../images/randomPic1.webp'


const Friends = () => {

  const cardData = [
    {
      image: randomPic2,
      name: "Emily",
      followers: "Followed by 1.8k"
    },
    {
      image: randomPic3,
      name: "Ravi",
      followers: "Followed by 526"
    },
    {
      image: randomPic4,
      name: "Richards",
      followers: "Followed by 3.9k"
    },
    {
      image: randomPic5,
      name: "Santosh",
      followers: "Followed by 774"
    },
    {
      image: randomPic6,
      name: "Cristopher",
      followers: "Followed by 7.8k"
    },
    {
      image: randomPic7,
      name: "Alizay",
      followers: "Followed by 9.9k"
    },
    {
      image: randomPic8,
      name: "Shahaan",
      followers: "Followed by 6.3k"
    },
    {
      image: randomPic9,
      name: "Elizabeth",
      followers: "Followed by 2.2k"
    },
    {
      image: randomPic10,
      name: "Henry",
      followers: "Followed by 3.8k"
    },
    {
      image: randomPic11,
      name: "Ben Stokes",
      followers: "Followed by 122k"
    },
    {
      image: randomPic12,
      name: "Salman",
      followers: "Followed by 1.7k"
    },
    {
      image: randomPic1,
      name: "Mehmood",
      followers: "Followed by 321"
    },
  ]
  return (
    <>
        <div className="friendsContainer">
          <Navbar />
            <div className="leftSide">
              <div className="heading">
                <h2>Freinds</h2>
                <IoMdSettings className='settingIcon'/>
              </div>
              <br />
              <hr />
              <br />
              {/* <br /> */}
              <div className="leftList">
                <div className="eachPoint point1">
                  <div className="pointTxt">
                    <LiaUserFriendsSolid className='friendIcon'/>
                    <h3>Home</h3>
                  </div>
                  <div className="arrow"></div>
                </div>
                <div className="eachPoint">
                  <div className="pointTxt">
                    <BsPersonCheckFill className='friendRequestIcon icon'/>
                    <h3>Friend Requests</h3>
                  </div>
                  <div className="arrow">
                    <IoIosArrowForward className="arrowIcon"/>
                  </div>
                </div>
                <div className="eachPoint">
                  <div className="pointTxt">
                    <MdPersonAddAlt1 className='suggestionIcon icon'/>
                    <h3>Suggestions</h3>
                  </div>
                  <div className="arrow">
                    <IoIosArrowForward className="arrowIcon"/>
                  </div>
                </div>
                <div className="eachPoint">
                  <div className="pointTxt">
                    <BsPersonLinesFill className='allFriendsIcon icon'/>
                    <h3>All Friends</h3>
                  </div>
                  <div className="arrow">
                    <IoIosArrowForward className="arrowIcon"/>
                  </div>
                </div>
                <div className="eachPoint">
                  <div className="pointTxt">
                    <FaGift className='birthdayIcon icon'/>
                    <h3>Birthdays</h3>
                  </div>
                  <div className="arrow"></div>
                </div>
                <div className="eachPoint">
                  <div className="pointTxt">
                    <BsPersonLinesFill className='customListIcon icon'/>
                    <h3>Custom List</h3>
                  </div>
                  <div className="arrow">
                    <IoIosArrowForward className="arrowIcon"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div className="heading">
                <h2>People you may know</h2>
                <a href="#">See all</a>
              </div>
              <div className="requestBoxes">
                {
                  cardData.map((data, id) => {
                    return(
                      <FriendCard 
                        key={id}
                        image={data.image}
                        name={data.name}
                        followers={data.followers}
                      />
                    )
                  })
                }
              </div>
            </div>
        </div>
    </>
  )
}

export default Friends