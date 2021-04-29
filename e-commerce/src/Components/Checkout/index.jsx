import Subtotal from './Subtotal';
import ProductCart from './ProductCart';
import {useStateValue} from '../../Contextes/stateprovider';
import './checkout.scss';

const Checkout = () => {

    const [{basket}] = useStateValue();
    return(
   <div className="checkout">
       <div className="checkout-left">

           {
               basket.length === 0 ? (
           <div>
              <h2 className="checkout__title">Votre panier est vide.</h2>
              <p>Vous n'avez pas d'articles dans le panier.</p>
          </div>
               ) : (
                   <div>
                       <h2 className ="shoppingBasketTitle">Articles dans le panier</h2>
                       {
                           basket.map(item =>(
                               <ProductCart 
                               id={item.id}
                               title={item.title}
                               image={item.image}
                               price={item.price}
                               rating={item.rating}
                               />
                           )) 
                       }
                           
                   </div>
               )
           }
          
       </div>

       <div className="checkout-right">
           <Subtotal />
       </div>
   </div>
    )
}

export default Checkout;