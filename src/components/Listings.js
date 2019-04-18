import React, { Component } from "react";
import styled from "styled-components";
import { styles, Button } from "../utils";
import { FaSquare, FaBed, FaCaretDown } from "react-icons/fa";

// import listingsData from '../data/listingsData'

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.loopListings = this.loopListings.bind(this);
  }

  loopListings() {
    var { listingsData } = this.props;

    if (listingsData === undefined || listingsData.length === 0) {
      return "Diese Filterkriterien ergeben leider kein Ergebnis";
    }

    return listingsData.map((listing, index) => {
      console.log(listing);

      return (
        <ListingWrapper key={index}>
          <div
            className="listing"
            style={{
              background: `url(${listing.image})`,
              backgroundSize: "100%"
            }}
          >

            <div className="listing-hover">
              <div>
                <div className='user-img'>
                  <img src={listing.userImg} alt="thumb"/>
                </div>
              </div>
              <div className='details' >
                <div 
                style={{fontWeight:'bold', 
                marginBottom:'.5rem'}}
                >
                  {listing.userName}
                </div>
                <div
                  style={{ 
                  marginBottom:'.5rem'}}
                  >

                  Hinzugefügt am: <br/>
                  {listing.postDate}
                </div>
                <div>
                  <div>
                    <span                
                    style={{
                    marginRight:'.7rem'
                    }}>
                    <FaBed/>
                    </span>
                    {listing.rooms}
                  </div>
                  <div>
                  <span                
                    style={{
                    marginRight:'.7rem'
                    }}>
                    <FaSquare/>
                    </span>
                    {listing.floorSpace} m&#178;
                  </div>
                </div>
                <div className='details-btn'>
                Details
              </div>
              </div>

            </div>

            </div>

          <div className="address">
            <div>{listing.address}</div>
            <div>{listing.city}</div>
            <div style={{marginTop:'.3rem'}} >€ {listing.price}</div>
          </div>
        </ListingWrapper>
      );
    });
  }

  render() {
    return (
      <AllListingsWrapper>
        {/* <section id="listings"> */}
        <section className="search-area">
          <input placeholder='Suche' type="text" name="search" onChange={this.props.change} />
        </section>

        <section className="sortby-area">
          <div className="results">
            {this.props.globalState.filteredData.length} Einträge gefunden
          </div>
          <div className="select-wrapper">
            <select
              name="sortby"
              className="sortby"
              onChange={this.props.change}
            >
              <option value="price-dsc">Niedrigster Preis</option>
              <option value="price-asc">Höchster Preis</option>
            </select>
          </div>
        </section>

        <LoopedListings
          className="listings-results"
          style={{ paddingTop: "1rem" }}
        >
          {this.loopListings()}
        </LoopedListings>

        <section id="pagination">
          <ul className="pages">
            <li>Erste</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Letzte</li>
          </ul>
        </section>
        {/* </section> */}
      </AllListingsWrapper>
    );
  }
}

const AllListingsWrapper = styled.div`
padding: 1rem;
    .sortby-area{
        margin-bottom: 20px;

        .results{
            font-size: .8rem;
            color: ${styles.colors.darkGrey};
            display: inline-block;
        }

        .select-wrapper{
            position: relative;
            display: inline;
            float: right;
            height: 10px;
            top: 0;

            select{
                background: transparent;
                padding: 5px;
                font-size: 14;
                font-weight: 500;
                color: #1b1b1b;
                display: block;
                margin-top: 5px;
                margin-bottom: 25px;
                width: 100%;
                border: none;
                ${styles.box}
                appearance: none;
                cursor: pointer;
            }
              
            .select-wrapper::before {
                font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f107";
                font-size: 15px;
                position: absolute;
                right: 2px;
                top: 1px;
                padding: 5px;
                color: black;
                cursor: pointer;
            }
        }
    }

.search-area{
    input[type="text"]{
        width: 70%;
        background: transparent;
        font-size: 2rem;
        border: none;
        border-bottom: 1px solid ${styles.colors.lightGrey};
        margin-bottom: 20px;
        color: ${styles.colors.darkGrey};
        font-weight: 100;
    }
}

#pagination{
    text-align: center;

    .pages{
        display: inline-block;
       

        li{
            padding: 20px 30px;
            display: inline-block;
            cursor: pointer;

            &:hover{
                -webkit-box-shadow: inset 0px 0px 0px 3px $lightPink;
                -moz-box-shadow: inset 0px 0px 0px 3px $lightPink;
                box-shadow: inset 0px 0px 0px 3px $lightPink;
            }

            &.active{
                -webkit-box-shadow: inset 0px 0px 0px 3px $pink;
                -moz-box-shadow: inset 0px 0px 0px 3px $pink;
                box-shadow: inset 0px 0px 0px 3px $pink;
                color: ${styles.colors.pink};
                font-weight: bold;
            }

        }
    }
}
`;

const LoopedListings = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

`

const ListingWrapper = styled.div`

    .select-wrapper {
        /* ... */
        position: relative;



        select{
            background: transparent;
            padding: 5px;
            font-size: 14;
            font-weight: 500;
            color: #1b1b1b;
            display: block;
            margin-top: 5px;
            margin-bottom: 25px;
            width: 10rem;
            border: none;
            ${styles.box}
            appearance: none;
            cursor: pointer;
        }
      }

      .select-wrapper::before {
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f107";
        font-size: 15px;
        position: absolute;
        right: 2px;
        top: 1px;
        padding: 5px;
        color: black;
        cursor: pointer;
      }

border:1px solid #ccc;
border-radius: 5px;
background: #efefef;
transform: scaleX(0.95);
padding-bottom: .5rem;

  .listing {
    transform: scale(1.05);
    color: white;
    height: 13rem;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    ${styles.box}
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    transition: 150ms linear;
    
    &:hover{
      transform: scale(1.06);
      
    }
    

    .listing-hover {
      height: 13rem;
      transition: 150ms linear;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: black;

      padding: .5rem;

      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-column-gap: 1rem;
      grid-template-rows: 70% 30%;

      &:hover {
        background: black;
        opacity: 0.85;
      }

      .user-img{
        overflow: hidden;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        position: relative;

        img{
        height:3rem;
        }
      }
      .details{
        text-align: left;
      }

      .details-btn{
        background:${styles.colors.pink};
        width:60%;
        margin:auto;
        border-radius: 5px;
        cursor: pointer;
        padding: 4px;
        margin: 2.5rem auto;
        justify-content: center;
        align-items:center;
        text-align: center;
      }

    }
  }
`
