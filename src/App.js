import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card 
            /*
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.rating}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            */
            key={item.id}
            item={item}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
              {cards}
            </section>
        </div>
    )
}