import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useStateValue} from '../../../Contextes/stateprovider';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import './product.scss';

const CheckoutProduct =({id, image, title, price, rating}) => {

    const [{basket},dispatch] = useStateValue();
    
    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title}/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>

                <p className="checkoutProduct__price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating) // on creer un array de rating (5 par exemple sur le produit), on le fill, pour pouvoir map sur un nombre
                        .fill()
                        .map((_,i) => ( 
                           <FavoriteIcon style={{fontSize: "0.5rem"}}/> // on a map sur le rating pour recuperer le nombre de coeurs
                        ))
                        
                    }

                    
                </div>
                <Tooltip TransitionComponent={Fade} title="Supprimer"><DeleteOutlineIcon onClick={removeFromBasket} className="checkout__button"/></Tooltip>
               
            </div>
        </div>
    )
}

export default CheckoutProduct;
