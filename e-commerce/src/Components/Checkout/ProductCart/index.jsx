import {useStateValue} from '../../../Contextes/stateprovider';
import './productCart.scss';


const ProductCart = ({id, title,image,price,rating}) => {
  
    const [{basket},dispatch] = useStateValue();
    
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id

        })
    }
    return (
        <div className="productCart">
<img className="productCart__image" src={image} alt=""/>
    <div className="productCart__info">
        <p className="productCart__title">{title}</p>
        <p className="productCart__price">{price}</p>
    </div>

    <div className="productCart__rating">
        {
        Array(rating)
        .fill()
        .map((_) => (
            <p>*</p>
        ))
    }
    </div>
    <button onClick={removeItem}>Retirer du panier</button>
        </div>
    )
}

export default ProductCart;