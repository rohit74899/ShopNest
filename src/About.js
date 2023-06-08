import React from 'react'
import HeroSection from './components/HeroSection'
import {useProductContext} from "./context/productcontext"


const About = () => {
// const {myName} = useContext(AppContext); //1st way to mport AppContext

const {myName}=useProductContext()

  const data={
    name:"Rohit Ecommerce",
  }
  return (
    <>
      {myName}
      <HeroSection mydata={data}/>
    </>
  )
}

export default About
