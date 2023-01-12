import React from "react"
import About from "./About"
import Interests from "./Interests"
import Info from "./Info"
import Footer from "./Footer"

export default function Main() {
  return (
    <main className="main--format">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </main>
  )
}