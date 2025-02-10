import React from 'react'
import Main_Aboutus from '../components/Main-Aboutus'
import Aboutusteam from '../components/About-us-team'
import Commonherosection from '../components/Common-herosection'
import Maintestinomial from '../components/Main-testinomial'

export default function Aboutus() {
  return (
    <main>
      <Commonherosection preheading={'Quality. Integrity. Value.'} heading={'About Us'} text={'We excel at transforming visions into reality <br /> through outstanding craftmanship and precise.'} />
      <Main_Aboutus />
      <Aboutusteam />
      <Maintestinomial />
    </main>
  )
}
