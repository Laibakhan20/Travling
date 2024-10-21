import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
  return (
    <div className="relative h-screen  items-center justify-center bg-cover bg-center text-white " style={{backgroundImage: "url(/contactimg.jpg)"}}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <section className="py-12 px-4 flex items-center justify-center md:items-center">
  <div className="relative z-10 text-center max-w-md w-full">
    <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
    <p className="mb-5">We&apos;d love to hear from you. Please fill out the form below to get in touch.</p>

    {/* Form */}
    <form>
      <div className="mb-4">
        <textarea id="text" placeholder="Enter your name" className="w-full text-black" />
      </div>
      <div className="mb-4">
        <textarea id="email" placeholder="Enter your email" className="w-full text-black" />
      </div>
      <div className="mb-4">
        <textarea placeholder="Enter your message" className="w-full text-black" />
      </div>
      <Button type="submit" className="bg-blue-600 w-full text-white">
        Send Message
      </Button>
    </form>
  </div>
</section>
        
        
        
    </div>
    
  )
}

export default Contact