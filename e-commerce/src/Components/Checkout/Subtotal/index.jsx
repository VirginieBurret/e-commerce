import './subtotal.scss';
import CurrencyFormat from 'react-currency-format'; 
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../../../Contextes/stateprovider';
import { getbasketTotal } from '../../../Reducer';

const Subtotal = () => {
    const history = useHistory();
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
          
          </>
      )}

      decimalScale={2}
      value={getbasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      />

      <button onClick={(e)=>history.push('/payment')}>Passer au paiement</button>
       </div>
    

    )
}

export default Subtotal;