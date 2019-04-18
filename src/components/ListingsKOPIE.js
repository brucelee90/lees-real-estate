import React, { Component } from "react";
import styled from "styled-components";
import { styles, Button } from "../utils";
import { FaSquare, FaBed, FaVaadin } from "react-icons/fa";

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
        <ListingWrapper>
          <div key={index}>
            {/* <div className="listing"> */}
            <div
              className="listing-img"
              style={{
                background: `url("${listing.image}") `,
                backgroundSize: "100%"
              }}
            >
              <div className="listing" >
                <span className="address">{listing.address}</span>

                <div className="details">
                  <div className="col-md-3">
                    <div
                      className="user-img"
                      style={{
                        background: `url("${
                          listing.userImg
                        }") no-repeat center center`,
                        backgroundSize: "cover"
                      }}
                    />
                  </div>

                  <div className="col-md-9">
                    <div className="user-details">
                      <div className="user-name">{listing.userName}</div>
                      <div className="post-date">
                        Hinzugefügt am: <br /> {listing.postDate}
                      </div>
                    </div>

                    <div className="listing-details">
                      <div className="floor-space">
                        <FaSquare />
                        <span style={{ marginLeft: ".5rem" }}>
                          {listing.floorSpace} m&sup2;
                        </span>
                      </div>
                      <div className="bedrooms">
                        <FaBed />
                        <span style={{ marginLeft: ".5rem" }}>
                          {listing.rooms} Zimmer{" "}
                        </span>
                      </div>
                    </div>
                    <Button>Details ansehen</Button>
                  </div>
                </div>
              </div>

              <div className="bottom-info">
                <div className="price">
                  <span>€</span>
                  {listing.price}
                </div>
                <div className="location">
                  <i className="fa fa-map-marker" />
                  {listing.city}/ {listing.state}
                </div>
              </div>
            </div>
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
          <input type="text" name="search" onChange={this.props.change} />
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

          <div className="sort-options">
            <div className="view">
              <i
                className="fa fa-th-list"
                aria-hidden="true"
                onClick={this.props.changeView.bind(null, "long")}
              />
              {/* onclick Funktion muss gebinded werden, damit die Funktion nicht sofort aufgerufen wird. */}
              <i
                className="fa fa-th"
                aria-hidden="true"
                onClick={this.props.changeView.bind(null, "box")}
              />
            </div>
          </div>
        </section>

        <LoopedListings
          className="listings-results"
          style={{ padding: "1rem" }}
        >
          {this.loopListings()}
        </LoopedListings>

        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Last</li>
          </ul>
        </section>
        {/* </section> */}
      </AllListingsWrapper>
    );
  }
}

const AllListingsWrapper = styled.div``;

const LoopedListings = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 1.3rem;
`;

const ListingWrapper = styled.div`
  .listing {
    position: relative;
    height: 14rem;

    .listing-img {
      height: 12rem;
      background: red;
    }

    .address {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .details {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 3fr;
      padding: 0.5rem;

      .user-img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
      }

      .listing-details {
        display: block;
        text-align: left;
        margin-left: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .user-details {
        display: block;
        text-align: left;
        margin-left: 0.5rem;
        margin-bottom: 0.5rem;

        .user-name {
          margin-bottom: 0.3rem;
          font-weight: bold;
        }
      }
    }
  }
`;
