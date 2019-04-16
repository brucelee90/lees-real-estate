import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {styles} from '../utils/index'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (
      <HeaderWrapper>
          <div className="logo">
            <a href="#">
            <span>New</span> HomeS
            </a>
        </div>

        <nav>
          <a href="#">Anzeige schalten</a>
          <a href="#">Über Uns</a>
          <a href="#">Anmelden</a>
          <a href="" className="register-btn">Registrieren</a>
        </nav>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`

    background: ${styles.colors.darkPurple};
    color: #211922;
    overflow: auto;
    padding: 20px 15px;
    box-shadow: 0 5px 5px rgba(128,128,128,.2);
    -moz-box-shadow: 0 5px 5px rgba(128,128,128,.2);
    -webkit-box-shadow: 0 5px 5px rgba(128,128,128,.2);
    font-size: 14px;
    background-color: #f6f6f6;
    height: 62px;
    border-bottom: 3px solid #414141;
    width: 100%;


        .logo{
            float: left;
            font-size: 20px;
            font-weight: 300;
            line-height: 30px;
            margin: -10px 0 0;
            background: #414141;
            background-color: rgb(65, 65, 65);
            background-position-x: 0%;
            background-position-y: 0%;
            background-repeat: repeat;
            background-attachment: scroll;
            background-image: none;
            background-size: auto;
            background-origin: padding-box;
            background-clip: border-box;
            padding: 10px 10px 15px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            text-shadow: 0 1px 1px #000;


            a{
                text-decoration: none;
                color: #fff;
                transition: .2s ease-in-out;

                &:hover{
                color: ${styles.colors.pink};
                }
                span{
                    color: ${styles.colors.pink};
                    font-weight: 400;
                }
            }
        }

    nav{
        float: right;
        a{
            text-decoration: none;
            color: #211922;
            padding: 7px 20px;
            font-weight: 300;
            font-size: .9rem;

            &:hover{
                color: ${styles.colors.pink};
            }

            &.register-btn{
                background: ${styles.colors.pink};
                
                text-align: center;
                color: white;
                border-radius: 5px;
            }
        }
    }
`