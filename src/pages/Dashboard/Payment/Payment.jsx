import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat" />
            <div className="w-4/6 mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;