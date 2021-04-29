import './product.scss';
import {useStateValue} from '../../Contextes/stateprovider';
const Product = ({id, title, image, price, rating}) => {

    const [{basket},dispatch] = useStateValue();
    console.log('basket content', basket)
    const addToBasket = () => {
        
        dispatch({
        type: 'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating

         }
      })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    
                    <strong>{price}</strong>
                    <small>€</small>

               </p>

               <div className="product__rating">
                   { 
                   Array(rating)
                   .fill()
                   .map((_) => (
                     <p>*</p>
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