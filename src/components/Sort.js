import React from 'react'
import styled from 'styled-components'

const Sort=()=> {
  return (
    <Wrapper className='card'>
     <div className="center">
        <h3>Our Products</h3>
     </div>
     

    </Wrapper>
  )
}
const Wrapper=styled.section`

  .center{
    
    text-align:center;
  }
  h3 {
    
    text-transform: capitalize;
  }
`
export default Sort
