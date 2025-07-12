import React from 'react'
import BannerProduct from '../component/BannerProduct'
import FirstPage from '../component/FirstPage'
import ProductCategories from '../component/ProductCategories'
import WhyChooseUs from '../component/WhyChooseUs'
import CallToActionSection from '../component/CallToActionSection'

const Home = () => {
  return (
    <section className='container mx-auto'>
      <FirstPage />
      <ProductCategories />
      <WhyChooseUs />
      <CallToActionSection />
    </section>
  )
}

export default Home