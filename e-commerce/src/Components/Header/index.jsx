import React from 'react'
import {useStateValue} from '../../Contextes/stateprovider';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {

    const [{basket, dispatch}] = useStateValue();
    
return (
  
<nav className="header">
    <Link to="/">
    <img src={`${process.env.PUBLIC_URL}/IMAGES/logo.png`} alt="logo" className="header__logo" />
    </Link>
    <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon style={{backgroundColor: '#FCF8EB  ',padding:'5px',height:'25px'}}classname="header__searchIcon" />
    </div>
     
     <div className="header__nav">
    <Link to='/' className='header__link'>
    <div className="header__option">
        <span className="header__optionLineOne">Bonjour Virginie </span>
        <span className="header__optionLineTwo">Déconnexion</span>
    </div>
</Link>

<Link to='/' className='header__link'>
    <div className="header__option">
        <span className="header__optionLineOne">Retours</span>
        <span className="header__optionLineTwo">& commandes</span>
    </div>
</Link>



        {/* BASKET ICON */}
<Link to="/checkout" className='header__link'>
    <div className="header__optionBasket">
        <ShoppingBasketIcon />
        {/* NUMBER OF ITEM IN BASKET */}
        <span className="header_optionLineTwo header__productCount">{basket?.length}</span>
    </div>
    </Link>
</div>

</nav>
)
}

export default Header;