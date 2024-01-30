import React from 'react'
import { HeroBanner } from './HeroBanner'
import { NavBar } from '../../components/NavBar'
import { FeaturedMovie } from './FeaturedMovie'
import { NewArrival } from './NewArrival'
import { ExclusiveVideo } from './ExclusiveVideo'
import { FeaturedCasts } from './FeaturedCast'

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <FeaturedMovie />
      <NewArrival />
      <ExclusiveVideo />
      <FeaturedCasts />
    </>
  )
}