import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings(){
  var{listingsData} = this.props

  if (listingsData === undefined || listingsData.length === 0) {
    return "Sorry, your filter did not match any listing"
  }

  return listingsData.map((listing, index) => {

    if (this.props.globalState.view ==='box'){
      // Box View
      return (
      <div className="col-md-3" key={index}>
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
                  <span>{listing.rooms} Zimmer</span>
                </div>
              </div>

              <div className="view-btn">
                Details ansehen
              </div>

            </div>
          </div>
        </div>
        <div className="bottom-info">
          <span className="price">€ {listing.price}</span>
          <span className="location">
            <i className="fa fa-map-marker"></i>
            {listing.city}/ {listing.state}
          </span>
        </div>
      </div>
    </div>)} else {
      // Long View
      return (
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
    )
    }
    
  })

  }

  render () {
    return (
      <section id="listings">
        <section className="search-area">        
          <input type="text" name="search" onChange={this.props.change}/>
        </section>

        <section className="sortby-area">
          <div className="results">{this.props.globalState.filteredData.length} Einträge gefunden</div>
            <div className="select-wrapper">
              <select name="sortby" className="sortby" onChange={this.props.change}>
                <option value="price-dsc">Niedrigster Preis</option>
                <option value="price-asc">Höchster Preis</option>
              </select>
            </div>
           
            
            <div className="sort-options">
              <div className="view">
                <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
                {/* onclick Funktion muss gebinded werden, damit die Funktion nicht sofort aufgerufen wird. */}
                <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
            </div>    
          </div>
        </section>

        <section className="listings-results">
          {this.loopListings()}
        </section>

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
      </section>
    )
  }
}
