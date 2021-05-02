import Subtotal from './Subtotal';
import {useStateValue} from '../../Contextes/stateprovider';
import CheckoutProduct from './Product';
import './checkout.scss';

const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();
    const username = user?.email.split("@"); 
    return(
   <div className="checkout">
       <div className="checkout-left">

          {basket.length==0 ? 
          <div>
              <h1 className="checkout__title">Votre panier est vide.</h1>
              <p>Vous n'avez pas d'articles dans le panier.</p>
          </div> : 
          
          <h1>Hello {username[0]}, voici votre panier :</h1>
          
          }
           
               
           {
               basket.map((item,i) => (
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

       <div className="checkout-right">
           <Subtotal />
       </div>
   </div>
    )
}

export default Checkout;