import React from 'react'
import styled from 'styled-components'
import {styles} from '../utils'

export default function Button({children}) {
  return (
    <MainButton>
      {children}
    </MainButton>
  )
}

const MainButton = styled.div`
/* background: red; */

text-decoration: none;
color: #211922;
padding: 7px;
font-weight: 300;
font-size: .9rem;
background: ${styles.colors.pink};
text-align: center;
color: white;
border-radius: 5px;
cursor: pointer;
width: 7rem;
transition: 120ms linear;

&:hover{
    background ${styles.colors.lightPink};
}




        
`