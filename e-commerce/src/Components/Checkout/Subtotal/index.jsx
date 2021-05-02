import './subtotal.scss';
import CurrencyFormat from 'react-currency-format'; 
import {useStateValue} from '../../../Contextes/stateprovider';
import { getbasketTotal } from '../../../Reducer';

const Subtotal = () => {
    const [{basket}] = useStateValue();
    //console.log('checkout basket',basket)
    
    return(
       <div className="subtotal">
      <CurrencyFormat
      renderText={(value) => (
          <>
          <p>
              Total articles : {basket.length}
              
          </p>
          <p>
          <strong>Total Prix : {value}€</strong>
          </p>
          <small className="subtotal__gift">
              <input type="checkbox"/> Cette commande est un cadeau
          </small>
          </>
      )}

      decimalScale={2}
      value={getbasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      />

      <button>Passer au paiement</button>
       </div>
    

    )
}

export default Subtotal;