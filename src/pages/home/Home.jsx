import React from 'react'
import Carousels from '../../components/carousels/Carousels'
import Feature from '../../components/feature/Feature'
import Intro from '../../components/intro/Intro'
import Welcome from '../../components/welcome/Welcome'
import Services from '../../components/services/Services'
import Achieved from '../../components/achieved/Achieved'
import Portfolio from '../../components/portfolio/Portfolio'
import Videos from '../../components/videos/Videos'

export default function Home() {
  return (
    <>
      <Carousels/>
      <Feature/>
      <Intro/>
      <Welcome/>
      <Services/>
      <Achieved/>
      <Portfolio/>
      <Videos/>
    </>
  )
}
