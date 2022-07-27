import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Card
                name="Life Lessons with Katie Zaferes"
                price="136"
                rating="5.0"
                reviewCount="6"
                country="PL"
            />
        </div>
    )
}