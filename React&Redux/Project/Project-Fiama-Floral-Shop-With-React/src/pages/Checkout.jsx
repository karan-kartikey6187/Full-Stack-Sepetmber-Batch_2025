import React, { Fragment } from 'react'
import { BreadcrumbSection } from '../components/common/BreadcrumbSection'
import { CheckoutLogin } from '../components/checkout/CheckoutLogin'
import { BillingDetails } from '../components/checkout/BillingDetails'
import { ToastContainer } from 'react-toastify'

export const Checkout = () => {
  return (
    <Fragment>
        <BreadcrumbSection currentPage="Checkout" />
        <CheckoutLogin />
        <BillingDetails />
        <ToastContainer />
    </Fragment>
  )
}
