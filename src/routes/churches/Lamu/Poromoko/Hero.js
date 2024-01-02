import React from 'react'
import './poromoko.css'
import hero1 from './poromokoImages/12.jpeg'
import hero2 from './poromokoImages/8.jpeg'
import hero3 from './poromokoImages/9.jpeg'
import hero4 from './poromokoImages/7.jpeg'

function Hero() {
  return (
    <div id="ProgramsR"><h3>HAPPENING WEEKLY</h3>
    <div className='Hero'>
    <div className='pic'>
       <img className= "hero-img" src={hero2} alt='hero'/>
       <p>SUNDAY SERVICES <br/>
           10:00 AM <br />
           Devotion/ Mafundisho <br />
           Praise & Worship<br />
           Testimonies & Prayer requests<br />
           Annoucements <br />
           Giving. Offerings & Tithes<br />
           Praise & Worship <br />
           Sermon<br />
           End of Service
           
       </p>
     </div>
     <div className='pic'>
       <img className='hero-img' src={hero3} alt='hero'/>
       <p>OTHER SERVICES <br />
         Time: 10:00 AM. <br />
         Main Sunday Services.  <br />
         Children Service/Sunday School.  <br />
         Youth Services Once per Month.  <br />
         Women Services Every third Sunday.  <br />
         Home services(Teusdays). <br/>
         Special Services.</p>
     </div>

     <div className='pic'>
       <img className='hero-img' src={hero1} alt='hero'/>
       <p>MONTHLY SERVICES <br />
       On the first Tuesday of each month, we host the Poromoko 
       Pastors' Fellowship, a gathering that takes place from 10:00 
       am to 12:00 pm. This special event brings together pastors 
       from various churches in the Poromoko, Mavuno, and Nyatha 
       regions. The aim is to foster collaboration, shared insights, 
       and mutual support among the local pastoral community.</p>
     </div>
     
     <div className='pic'>
       <img className= "hero-img" src={hero4} alt='hero'/>
       <p>THURSDAY'S FELLOWSHIPS<br />
       Every Thursday, our church holds a fellowship session 
       from 2 pm to 3 pm. During this dedicated time, members come 
       together to engage in spiritual activities, fostering a 
       sense of community and shared devotion. This regular 
       gathering serves as an opportunity for worship, prayer, 
       and communal bonding, contributing to the spiritual growth 
       and unity of our congregation.
       </p>
     </div>
     </div>
    </div>
  )
}

export default Hero
