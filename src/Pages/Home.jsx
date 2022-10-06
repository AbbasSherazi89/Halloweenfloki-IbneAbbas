import React from 'react'
import Documents from '../Components/Elements/Documents'
// import Faq from '../Components/Elements/Faq'
import Hero from '../Components/Elements/Hero'
import Ourplane from '../Components/Elements/Ourplane'
import ReadDoc from '../Components/Elements/ReadDoc'
import Tokenomics from '../Components/Elements/Tokenomics'
import FAQs from '../Components/Utils/FAQs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Tokenomics/>
      <Documents/>
      <Ourplane/>
      <ReadDoc/>
      {/* <Faq/> */}
      <FAQs/>
    </div>
  )
}

export default Home
