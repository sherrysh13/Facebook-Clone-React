import React from 'react'
import './Marketplace.css'
import MarketplaceCard from './MarketplaceCard'
import shoes1 from '../images/shoes1.jpg'
import shoes2 from '../images/shoes2.jpeg'
import watch1 from '../images/watch1.webp'
import watch2 from '../images/watch2.jpeg'
import tracksuit1 from '../images/tracksuit1.jpeg'
import tracksuit2 from '../images/tracksuit2.webp'
import bridlesuit1 from '../images/bridlesuit1.jpeg'
import bridlesuit2 from '../images/bridlesuit2.jpeg'
import bridlesuit3 from '../images/bridlesuit3.jpg'
import mobile1 from '../images/mobile1.jpg'
import mobile2 from '../images/mobile2.jpeg'
import airpod from '../images/airpod.jpeg'
import airpod2 from '../images/airpod2.jpg'
import Navbar from '../Homa Page/Navbar'

const Marketplace = () => {

  const cardsData = [
    {
      image: shoes1,
      price: "Rs. 7,499",
      title: "Pure Leather Shoes"
    },
    {
      image: tracksuit1,
      price: "Rs. 1,199",
      title: "Best Track Suit"
    },
    {
      image: watch1,
      price: "Rs. 2,500",
      title: "Men's Watch"
    },
    {
      image: bridlesuit1,
      price: "Rs. 789",
      title: "Off-white Bridle Dress"
    },
    {
      image: airpod2,
      price: "Rs. 1,389",
      title: "Airpod Pro Max"
    },
    {
      image: bridlesuit2,
      price: "Rs. 40,000",
      title: "walima Dress"
    },
    {
      image: shoes2,
      price: "Rs. 950",
      title: "Best Shoes for Running"
    },
    {
      image: watch2,
      price: "Rs. 3,700",
      title: "Royal Men's Watch"
    },
    {
      image: tracksuit2,
      price: "Rs. 789",
      title: "Best Track Suit"
    },
    {
      image: bridlesuit3,
      price: "Rs. 77,589",
      title: "Baraat Dress"
    },
    {
      image: mobile2,
      price: "Rs. 73,600",
      title: "Samsung Galaxy A50"
    },
    {
      image: mobile1,
      price: "Rs. 55,700",
      title: "Redmi 15C"
    },
    {
      image: airpod,
      price: "Rs. 999",
      title: "Genuine Airpods"
    }
  ]
  return (
    <>
     <div className="marketplaceContainer">
      <Navbar />
      <div className="heading">
        <h2>Sell or Buy your products here...</h2>
      </div>
      <div className="bodyContainer">
        {
          cardsData.map((card) => {
            return(
              <MarketplaceCard 
              image={card.image}
              price={card.price}
              title={card.title}
              />
            )
          })
        }
      </div>
     </div>
    </>
  )
}

export default Marketplace