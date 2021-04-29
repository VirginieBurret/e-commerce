import Subtotal from './Subtotal';

import './checkout.scss';

const Checkout = () => {
    return(
   <div className="checkout">
       <div className="checkout-left">
          <div>
              <h2 className="checkout__title">Votre panier est vide.</h2>
              <p>Vous n'avez pas d'articles dans le panier.</p>
          </div>
       </div>

       <div className="checkout-right">
           <Subtotal />
       </div>
   </div>
    )
}

export default Checkout;