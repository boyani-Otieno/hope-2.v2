import {useState} from 'react'
import './events.css'

function Events(){
const [cards] = useState([
    {
        title: 'Prayer & Fasting',
        text: `This year's 21 days of prayer and fasting will held at 
        Lucky summer headquaters office one can join physical/virtually
        The main prayer point is Exodus 14:14.
         `
    },
    {
        title: 'Tumaini Ministry Celebration',
        text: `On Sunday 21, April 2024 there will be  a celebration to 
        celebrate the retirement of Pastor Francis Omutelema. As we plan for the 
        same more details will be communicated timely.
        `
    },
    {
        title: 'Youth Ministry',
        text: `A Leaders Training session for the youth 
        is scheduled to take place on February 10, 2024, 
        at TUMATI. The focus is on empowering the leaders to 
        effectively guide and lead their fellow youth in a Christ-centered manner.
         `
    },
    {
        title: 'Women Ministry',
        text: `On August, women have a trip to 
        kilifi where they will visit all the kilifi churches. 
        They've welcomed the Youth to join.
         `
    },
    {
        title: 'Church Openning',
        text: `September 27 2023 Tumaini Marram 
        officially opened by Miller and Tumaini Family
         `
    },
    {
        title: 'Ministry Events',
        text: `All events and projects carried out by churches or 
        Tumaini projects, are Tumaini Ministries events.
         `
    },
    
])
   return (
        <div>
            <section className='events'>
                <div className="container2">
                    <h1 className='upcoming'>Explore Some of Our Events</h1>
                    <h2>January 2024</h2>
                    <div className="cards">
                        {cards.map((card, i) => (
                             <div key={i} className="card">
                                <h4>{card.title}</h4>
                                <p>{card.text}</p>
                                {/* <button className='btn'>Explore</button> */}
                            </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Events;