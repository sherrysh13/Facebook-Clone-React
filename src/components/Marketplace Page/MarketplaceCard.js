import React from 'react'

const MarketplaceCard = ({image, price, title}) => {
  return (
    <>
      <div className="productBoxes">
        <div className="productBox">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="price">
              <h2>{price}</h2>
            </div>
            <div className="title">
              <p>{title}</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default MarketplaceCard