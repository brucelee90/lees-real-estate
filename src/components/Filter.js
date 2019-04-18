import React, { Component} from 'react'
import styled from 'styled-components'
import {styles} from '../utils/index'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }
  // Bevor die render Methode aufgerufen wird, soll componentWillMount aufgerufen werden. 
  // Funktion läuft laut react api immer vor render-Funktion
  componentWillMount(){
    this.props.populateAction()
  }

  cities(){
    if (this.props.globalState.populateFormsData.cities != undefined ) {
      var { cities } = this.props.globalState.populateFormsData
      return cities.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
      })
    }
  }

  homeTypes(){
    if (this.props.globalState.populateFormsData.homeTypes != undefined ) {
      
      var { homeTypes } = this.props.globalState.populateFormsData
      return homeTypes.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
      })
    }
  }

  bedrooms(){
    if (this.props.globalState.populateFormsData.bedrooms != undefined ) {
      
      var { bedrooms } = this.props.globalState.populateFormsData
      return bedrooms.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
      })
    }
  }
  
  render () {
    return (
      <FilterWrapper>
      <section id="filter">
      <div className="inside">
          <h4>Filter</h4>
          <label htmlFor="City">Stadt</label>
          <div className="select-wrapper">
            <select name="city" className="city filters" onChange={this.props.change}>
              <option value="All">Alle</option>
              {this.cities()}
            </select>
          </div>

          <label htmlFor="homeType">Immobilie</label>
          <div className="select-wrapper">
          <select name="homeType" className="homeType filters" onChange={this.props.change}>
            <option value="All">Alle</option>
            {this.homeTypes()}
          </select>
          </div>

          <label htmlFor="bedrooms">Zimmer</label>
          <div className="select-wrapper">
          <select name="bedrooms" className="bedrooms filters" onChange={this.props.change}>
            {this.bedrooms()}
          </select>
          </div>

          <div className="filters price">
            <span className="title">Preis</span>
              <span className="von-bis">von</span>
              <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
              <span className="von-bis">bis</span>
              <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
          </div>
          <div className="filters floor-space">
            <span className="title">Fläche (in m&sup2;)</span>
              <span className="von-bis">von</span>
              <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
              <span className="von-bis">bis</span>
              <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
          </div>

          {/* Extras mit checkboxen */}
          <div className="filters extras">
          <span className="title">Extras</span>
            <label htmlFor="extra">
              <span>Aufzug</span>
              <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/></label>
          </div>
          <div className="filters extras">
            <label htmlFor="extra">
              <span>Swimming Pool</span>
              <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change}/></label>
          </div>
          <div className="filters extras">
            <label htmlFor="extra">
              <span>Wintergarten</span>
              <input name="wintergarten" value="wintergarten" type="checkbox" onChange={this.props.change}/></label>
          </div>
          <div className="filters extras">
            <label htmlFor="extra">
              <span>Garten</span>
              <input name="garten" value="garten" type="checkbox" onChange={this.props.change}/></label>
          </div>
        </div>
      </section>
      </FilterWrapper>
    )
  }
}

const FilterWrapper = styled.div`

#filter{
    background: ${styles.colors.grey};
    max-width: 300px;
    float: left;
    -webkit-border-bottom-right-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    border-bottom-right-radius: 5px;


    .inside{
        padding: 10px;
        font-weight: 300;
        font-size: 0.9rem;
    }

    h4{
        font-size: 0.9rem;
        margin-bottom: 25px;
        font-weight: 400;
        text-transform: uppercase;
    }
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
            width: 100%;
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



    .filters{
        .title{
            font-size: .9rem;
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 300;
        }
        .von-bis{
            font-size: 0.8rem;
        }
        input[type="text"]{
            margin-left: 10px;
            margin-right: 10px;
            width: 33%;
            background: transparent;
            font-size: 1rem;
            border: none;
            border-bottom: 1px solid ${styles.colors.lightGrey};
            margin-bottom: 20px;
            color: ${styles.colors.darkGrey};
            font-weight: 100;
            
            // border-radius: 50px;
            // font-size: 1rem;
            // padding: .4rem;
            // width: 45%;
            // display: inline-block;
            // margin-right: 2.5%;
            // margin-bottom: 1rem;
        }
        &.extras{
            label{
                display: block;
                font-weight: 300;
                width: 100%;
                padding: 10px 0;

                input[type="checkbox"]{
                    float: right;
                }
            }
        }
    }
}

`