import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
        <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Start your journey by one click, explore beautiful world!</h1>
        <p className="mb-5">
          Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!
        </p>
        <Button className=" bg-transparent border-white border-2 py-2 px-4 rounded">Get Started</Button>
      </div>
    </div></div>
  )
}

export default Hero