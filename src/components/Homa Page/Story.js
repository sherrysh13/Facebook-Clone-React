import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";


const Story = ({profilePic, statusPic, profileName}) => {

    const [isStatusVeiwing, setisStatusVeiwing] = useState(false)

    useEffect(() => {
        if(isStatusVeiwing){
            const timer = setTimeout(() => {
              setisStatusVeiwing(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [isStatusVeiwing])
    

  return (
    <>
        <div className="story" onClick={() => setisStatusVeiwing(true)}>
            <div className="pic">
                <img src={profilePic} alt="" />
            </div>
            <div className="status">
                <img src={statusPic} alt="" />
            </div>
            <div className="name">
                {profileName}
            </div>
        </div>
        {
            isStatusVeiwing && (
                <div className="statusView">
                    <div className="statusBar"></div>
                    <div className="status">
                        <img src={statusPic} alt="Status" />
                    </div>
                    <button onClick={() => setisStatusVeiwing(false)}><ImCross className='crossIcon'/></button>
                </div>
            )
        }
    </>
  )
}

export default Story