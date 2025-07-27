import React from 'react'
import Hero from './Hero'
import { Container } from '@mui/material'
import Category from './Category'
import TopSelling from './TopSelling'
import EasyFast from './EasyFast'
import TestimonialSlider from './TestimonialSlider'
import SubscribeSection from './SubscribeSection'

export default function HomeIndex() {
  return (
    <Container>
      <Hero />
      <Category/>
      <TopSelling/>
      <EasyFast/>
      <TestimonialSlider/>
      <SubscribeSection/>
    </Container>
  )
}
