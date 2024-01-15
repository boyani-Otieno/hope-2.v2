import React from 'react'
import mpesa from '../../../../assets/mpesa.png'

const GiveR = () => {
  return (
    <div className='give' id='giveR'>
      <h1>GIVING</h1>
      <h3>Offerings and tithes</h3>
      <div className='pays'>
        <div>
         <h5>Safaricom Mpesa</h5>
          <img className='pay-img' src={mpesa} alt="pay"/>
           <h4>Pastor's Mpesa No: +254 718844614</h4>
        </div>          
      </div>
    </div>
  )
}

export default GiveR
