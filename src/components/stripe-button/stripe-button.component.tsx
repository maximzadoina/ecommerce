import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HJGrLLdC9C411NAmKjejWfBum12b3xw9bsFdt2n10zL8qcGjGIgaKoreC8ZvK2xrdbUvvxqyP7Y1d4LNCr5jx2q00RFgaEqTu'

    const onToken=token=>{
        console.log(token)
        alert('Paymen Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Ecommerce'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton