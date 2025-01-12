import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useCart from "./../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = () => {
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState('')
  const elements = useElements();
  const [transactionId, setTransactionId] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const {user} = useAuth()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: totalPrice })
    .then(res => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setErrorMessage(error.message);
    } else {
      console.log("PaymentMethod", paymentMethod);
      setErrorMessage(null);
    }

    // conform Payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if(confirmError) {
      console.log('confirm error');
    }
    else {
      console.log('payment intent',paymentIntent)
      if(paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id)
      }
    }

  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-primary block mx-auto"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {transactionId && <p className="text-green-600">Your Transaction id: {transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;
