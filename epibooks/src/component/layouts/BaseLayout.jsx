import React from 'react'
import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'

const BaseLayout = ({children}) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default BaseLayout
