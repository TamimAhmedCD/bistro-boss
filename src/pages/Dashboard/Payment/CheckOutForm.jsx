import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useCart from "./../../../hooks/useCart";

const CheckOutForm = () => {
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState('')
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
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
      console.log("[PaymentMethod]", paymentMethod);
      setErrorMessage(null);
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
    </form>
  );
};

export default CheckOutForm;
