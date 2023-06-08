import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'
function ErrorPage() {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>
            404
          </h2>
          <h3>Uh Oh! you lost</h3>
          <p>
            click here to go to homepage
          </p>
          <NavLink to="/">
            <Button>
              Go back to HomePage
            </Button>
          </NavLink>
          
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
.container{
  padding: 3rem 0;
  text-align: center;
}
h2{
  font-size:5rem;
}
h3{
  font-size:3rem;
}
p{
  margin:2rem 0;
}
`
export default ErrorPage
