import React from 'react'
import Navbar from './Navbar'
import Post from './Post'
import mypic from '../images/mypic.JPG'
import coverPhoto from '../images/coverPhoto.jpg'
import born from '../images/born.jpg'


const Profile = () => {
  return (
    <>
      <div className="profileContainer">
        <Navbar />
        <div className="profilePhotos">
         <div className="coverPhoto">
           <img src={coverPhoto} alt="" />
         </div>
         <div className="profilePhoto">
           <img src={mypic} alt="" />
         </div>
        </div>
        <div className="bodySides">
          <div className="leftSide">
            <div className="intro">
              <h1>Intro</h1>
            <div className="education">
              <div className="school">
                <h4>School:-</h4>
                <h3>
                  Allama Iqbal
                  <br />
                  (2020-2021)
                </h3>
              </div>
              <div className="college">
                <h4>College:-</h4>
                <h3>
                  KIPS College
                  <br />
                  (2022-2023)
                </h3>
              </div>
              <div className="university">
                <h4>University:-</h4>
                <h3>
                  Virtual University of Pakistan
                  <br />
                  (2023-Present)
                </h3>
              </div>
            </div>
            </div>
          </div>
          <hr />
          <br /><br />
          <div className="rightSide">
            <div className="profilePageBornPost">
              <div className="bornPost">
                <Post 
                image={mypic}
                name="Sherry Sheikh"
                date="13 Jun, 2005"
                title=""
                post={born}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile