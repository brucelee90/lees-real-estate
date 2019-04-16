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

#content-area{
    overflow: auto;
    width: 100%;
    min-height: 100vh;
    background: ${styles.colors.background};
}

#filter{
    background: ${styles.colors.grey};
    width: 30%;
    max-width: 300px;
    // display: inline-block;
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
            /* @include boxes; */
            box-shadow: 0 1px 3px rgba(34,25,25,.4);
            -moz-box-shadow: 0 1px 3px rgba(34,25,25,.4);
            -webkit-box-shadow: 0 1px 3px rgba(34,25,25,.4);
            border-radius: 3px;
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

#listings{
    width: 70%;
    float: left;
    padding: 15px;
    background: ${styles.colors.background};

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
                /* @include boxes; */
                box-shadow: 0 1px 3px rgba(34,25,25,.4);
                -moz-box-shadow: 0 1px 3px rgba(34,25,25,.4);
                -webkit-box-shadow: 0 1px 3px rgba(34,25,25,.4);
                border-radius: 3px;
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

    .sort-options{
        float: right;

        /* // select{
        //     font-size: .9rem;
        //     font-weight: 300;
        //     // border: 1px solid $lightGrey;
        //     // background: transparent;
        //     display: inline-block;
        //     margin-right: 15px;
        //     vertical-align: top;
        // } */
        .view{
            display: inline-block;

            .fa, .fas, .far{
                
                font-size: 1.5rem;
                margin-right: 15px;
                cursor: pointer;
            }
            .fa:hover{
                color: ${styles.colors.pink};
                font-size: 1.5rem;
                margin-right: 15px;
            }

        }
    }

    .listings-results{
        margin-bottom: 60px;

        .listing{
            background: #fff;
            box-shadow: 0 1px 3px rgba(34,25,25,.4);
            -moz-box-shadow: 0 1px 3px rgba(34,25,25,.4);
            -webkit-box-shadow: 0 1px 3px rgba(34,25,25,.4);
            border-radius: 3px;
            /* @include boxes; */
            transition: .4s ease-in-out;
            }
        
        .listing-img{
            color: white;
            padding: 15px;
            position: relative;
            background: url(https://images.dwell.com/photos/6328431439726800896/6402811025424896000/large.jpg) no-repeat center center;
            background-size: cover;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;

            min-height: 200px;
            -webkit-border-top-left-radius: 3px;
            -webkit-border-top-right-radius: 3px;
            -moz-border-radius-topleft: 3px;
            -moz-border-radius-topright: 3px;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;

            .address{
                text-shadow: 0px 3px 5px rgba(0,0,0,0.51);
                text-transform: capitalize;
                position: absolute;
                bottom: 20px;
                transition: 0.4s ease-in-out;
            }

            &:hover{
                .details{
                    opacity: 1;
                }
                .address{
                    opacity: 0;
                }
           }



            .details{
                opacity: 0;
                padding: 20px;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                -webkit-border-top-left-radius: 5px;
                -webkit-border-top-right-radius: 5px;
                -moz-border-radius-topleft: 5px;
                -moz-border-radius-topright: 5px;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;

                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#490dc1+0,cf85f7+100 */
                background: rgba(73,13,193, .8); /* Old browsers */
                background: -moz-linear-gradient(-45deg, rgba(73,13,193,.8) 0%, rgba(207,133,247,1) 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(-45deg, rgba(73,13,193,.8) 0%,rgba(207,133,247,1) 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(135deg, rgba(73,13,193,.8) 0%,rgba(207,133,247,.8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#490dc1', endColorstr='#cf85f7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
                transition: 0.4s ease-in-out;


                .user-img{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    border: 2px solid white;
                    display: inline-block;
                    // background: url(https://images.dwell.com/photos/6328431439726800896/6402811025424896000/large.jpg) no-repeat center center; 
                    -webkit-background-size: cover;
                    -moz-background-size: cover;
                    -o-background-size: cover;
                    background-size: cover;
                } 
                .user-details{
                    display: inline-block;
                    vertical-align: top;
                     
                    .user-name{
                        font-weight: 300;
                        font-size: .9rem;
                        display: block;
                        color: rgba(255, 255, 255, 1);
                        margin-bottom: 5px;
                    }
                    .post-date{
                        font-size: .9rem;
                        display: block;
                        color: rgba(255, 255, 255, 0.7);
                    }
                }
                .listing-details{
                    margin-top: 20px;
                    margin-bottom: 10px;
                    
                    .fa,.far,.fas{
                        display: inline-block;
                        font-size: 20px;
                        margin-right: 15px;
                    }

                    span{
                        display: inline-block;
                        font-size: .8rem;
                        font-weight: 300;
                        vertical-align: top;
                        position: relative;
                        top: 3px;
                    }

                    .floor-space{
                        margin-bottom: 10px;
                    }
                }
            }
        }
        .bottom-info{
            padding: 15px;

            .price{
                font-size: 1rem;
                display: block;
                margin-bottom: 10px;
                color: ${styles.colors.darkGrey};
            }

            .location{
                font-size: 1rem;
                font-weight: 100;
                display: block;
                color: ${styles.colors.darkGrey};
            }

            .fa-map-marker{
                margin-right: 8px;
            }

        }
    }
}

.view-btn{
    background: ${styles.colors.pink};
    padding: 8px;
    font-size: .9rem;
    border-radius: 5px;
    text-align: center;
    max-width: 150px;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    &:hover{
        background: ${styles.colors.lightPink};
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
                -webkit-box-shadow: inset 0px 0px 0px 3px ${styles.colors.lightPink};
                -moz-box-shadow: inset 0px 0px 0px 3px ${styles.colors.lightPink};
                box-shadow: inset 0px 0px 0px 3px ${styles.colors.lightPink};
            }

            &.active{
                -webkit-box-shadow: inset 0px 0px 0px 3px ${styles.colors.lightPink};
                -moz-box-shadow: inset 0px 0px 0px 3px ${styles.colors.lightPink};
                box-shadow: inset 0px 0px 0px 3px ${styles.colors.lightPink};
                color: ${styles.colors.lightPink};
                font-weight: 700;
            }

        }
    }
}

.col-md-3{
    width: 33.33%;
    display: inline-block;
    vertical-align: top;
    padding: 3px 3px;
}

.col-md-9{
    width: 66.33%;
    display: inline-block;
    vertical-align: top;
}

.col-lg-6{
    width: 50%;
    display: inline-block;
    vertical-align: top;
    padding: 3px 3px;
}
`