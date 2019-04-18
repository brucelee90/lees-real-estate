import React from 'react'
import styled from 'styled-components'

export default function ListingsPart() {
  return (
    <ListingsWrapper>
    <div className="col-md-12 col-lg-6" key={index}>
    <div className="listing">
      <div className="listing-img" style={{background: `url("${listing.image}")` }}>
        <span className="address">{listing.address}</span>
        <div className="details">
          <div className="col-md-3">
            <div className="user-img" style={{background: `url("${listing.userImg}") no-repeat center center`, backgroundSize: 'cover'}}></div>
          </div>

          <div className="col-md-9">
            <div className="user-details">
              <span className="user-name">{listing.userName}</span>
              <span className="post-date">{listing.postDate}</span>
            </div>

            <div className="listing-details">
              <div className="floor-space">
                <i className="far fa-square"></i>
                <span>{listing.floorSpace} m&sup2;</span>
              </div>
              <div className="bedrooms">
                <i className="fa fa-bed" ></i>
                <span>{listing.rooms} Zimmer </span>
              </div>
            </div>

            <div className="view-btn">
            Details ansehen
            </div>

          </div>
        </div>
      </div>
      <div className="bottom-info">
        <span className="price"><span>€</span>{listing.price}</span>
        <span className="location">
          <i className="fa fa-map-marker"></i>
          {listing.city}/ {listing.state}
        </span>
      </div>
    </div>
  </div>
  </ListingsWrapper>
  )
}

const ListingsWrapper = styled.div `

`