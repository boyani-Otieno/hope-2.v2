import React from 'react'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
//import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalPayment from './PayPalPayment'

export default function Donate() {

  const initialOptions = { 
    clientId: "Ae-vBbWIdIibTDbDXlSPaR1sJFlvNem_OkwB0HtEqn5TDBbnqWRK9Nr__ph70dXz3uL8rFNMdiHLPiXR",
    currency: "USD",
    intent: "capture",
};

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div>
        <h1>Support Our Ministry</h1>
        {/* <button>Donate</button> */}
        <PayPalPayment />
      </div>
    </PayPalScriptProvider>
  )
}