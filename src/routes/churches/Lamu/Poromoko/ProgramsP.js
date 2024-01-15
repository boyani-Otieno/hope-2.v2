import React from 'react'
import './poromoko.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const ProgramsP = () => {
  return (
    <section id ="ProgramsR">
      <h4>Our Current and Future Programs</h4>
      <div className="container program_container">
        <div className="program_frontend">
          <h4>Current Projects</h4>
          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Farming</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Bee Keeping</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
           <div>
           <h4>Poultry Farming</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>
       
        <div className="program_backend">
        <h4>Future Projects</h4>
          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Buy land</h4>
            <small className="text-light">In Progress</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Church Block building</h4>
            <small className="text-light">Started</small>
            </div>
          </article>

          <article className="program_details">
            <div className='program_details-icon'><BsPatchCheckFill /></div>
            <div>
            <h4>Bore hole construction</h4>
            <small className="text-light">Future</small>
            </div>
          </article>
        </div>
      </div>
      <div>
        <p>
        <h4>Feeding program</h4>
        This initiative has been a continuous endeavor since 
        the inception of our Poromoko Church. Traditionally, 
        we come together to share a nourishing porridge following 
        our Sunday service before parting ways. Given the remarkable 
        fertility of this area, there exists the potential to sustain the 
        Tumaini family throughout the entire year with careful planning.
        By securing a borehole, we envisage a continuous supply of vegetables, 
        not only ensuring sustenance for our community but also generating financial 
        resources for the Church. Moreover, this endeavor could serve as a viable income 
        source for our members, offering them opportunities to engage in farm work and earn 
        a livelihood. This ambitious project is part of our future plans, contingent on acquiring 
        a suitable piece of land and installing essential infrastructure such as a borehole, water 
        tank, and irrigation pipes.
        </p>
      </div>
      </div>
    </section>
  )
}

export default ProgramsP