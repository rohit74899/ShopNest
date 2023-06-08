import React from 'react'
// import styled  from 'styled-components'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';


const Home = () => {
  // return (
  //   <Wrapper className='test'>
  //     home page
  //   </Wrapper>
  // )
  const data={name:"Rohit Store"}
  return(
    <>
    <HeroSection mydata={data}/>
    <Services/>
    <Trusted/>
    </>
  ) 
 
}

//we have created out own compnent like <div></div> we can use that

// NO NEED after use of HeroSection
  // const Wrapper=styled.section`
  //     background-color:${({theme})=>theme.colors.bg};
  //     height:100vh;
  // `;

///////////////////////////
// wrapper is just a variable to use styled properties
//now wrapper will work like section
export default Home
