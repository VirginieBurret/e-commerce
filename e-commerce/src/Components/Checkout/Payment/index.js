import React, {useState , useEffect}from 'react';
import {Link, useHistory} from 'react-router-dom';
import dispatchApiWithaxios from '../../../Api/axios';
import CurrencyFormat from 'react-currency-format'; 
import {getbasketTotal} from '../../../Reducer';
import CheckoutProduct from '../../Checkout/Product';
import {useStateValue }from '../../../Contextes/stateprovider';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './payment.scss';



const Payment = () => {
    const history = useHistory();
    const [{basket,user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")

    const [error, setError] = useState(null);
    const [disabled, setDisabled ] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
       //generate the special stripe secret which allows us to charge a customer
       const getClientSecret = async () => {
          const response = await dispatchApiWithaxios ({
              method:'post',
              // stripe expects the total  in a currencies subunits
              url:`/payments/create?total=${getbasketTotal(basket) * 100 }`// we give the total in the url with the query param ?
          });

          setClientSecret(response.data.clientSecret)
       }

       getClientSecret();
    }, [basket]) // whenever the basket changes because we need to tell stripe there is no longer 15$ in the basket but now there is 20$
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card : elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation
            // if that was correct and everything went good : 
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace('/orders')
        })

    }

    const handleChange = (event) => { // listen changes inside input 
    setDisabled(event.empty); // if event is empty
    setError(event.error ? event.error.message : "") // if error show error otherwise nothing
    //console.log("EVENT>>>>",event)
    }

    return (
    <div className="payment">

        <div className="paymentContainer">
            <h1>Paiement  {basket?.length >= 1 ? (
                <Link className="link" to ="/checkout">{basket?.length} { basket?.length >= 2 ? 'articles' : 'article'}</Link>
            ) : '' }
            </h1>
            {/*Delivery adress */}
            <div className="payment__section">
                <div className="payment__title">
                   <p style={{fontSize:"1.5rem"}}>Adresse de livraison</p>
                </div>
                <div className="payment__adress">
                    <p>{user?.email}</p>
                    <p>212 Avenue Raymond Naves C01</p>
                    <p>31500 Toulouse</p>
                </div>
            </div>

           {/*Review Items */}
            <div className="payment__section">
                <div className="payment__title">
                   <p style={{fontSize:"1.5rem"}}>Articles</p>
                </div>
                <div className="payment__items">
                    {
                        basket.map(item => (
                            <CheckoutProduct
                            
                               id={item.id}
                               title={item.title}
                               image={item.image}
                               price={item.price}
                               rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="payment__section">
                 <div className="payment__title">
                   <p style={{fontSize:"1.5rem"}}>Méthode de paiement</p>
                </div>

                <div className="payment__details">
                    <form onSubmit={handleSubmit}> 
                      <CardElement onChange={handleChange} />

                      <div className="payment__priceContainer">
                      <CurrencyFormat
                         renderText={(value) => (
                            <>
                               
                               <p><strong>Total Prix : {value}€</strong> </p>
          
                            </>
                         )}

                                decimalScale={2}
                                value={getbasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                        />
                            <button disabled={processing || disabled  || succeeded} >
                                <span>{processing? <p>Transaction en cours</p> : <p>Payer Maintenant</p> }</span>
                            </button>

                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Payment;
