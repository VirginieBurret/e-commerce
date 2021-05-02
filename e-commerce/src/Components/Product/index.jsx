import './product.scss';
import {useStateValue} from '../../Contextes/stateprovider';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Product = ({id,title, image, price, rating}) => {
    
     //const [state, dispatch] = useStateValue();
    const [{basket},dispatch] = useStateValue();
    console.log('BASKET',basket)
    const addToBasket = () => {
        //dispatch l'item dans le data layer
        dispatch({
        type: 'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating

         },
      });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    
                    <strong>{price}</strong>
                    <small>€</small>

               </p>

               <div className="product__rating">
                   { 
                   Array(rating)
                   .fill()
                   .map((_, i) => (
                    <FavoriteIcon style={{fontSize: "0.5rem"}}/>
                   ))
                }
               </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Ajouter au panier</button>
        </div>
    )
}

export default Product;