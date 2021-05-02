import React from 'react'
import {useStateValue} from '../../Contextes/stateprovider';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import './header.scss';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './header.scss';
import { auth } from '../../Config/firebase';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);


const Header = () => {

    const [{user, basket },dispatch] = useStateValue();
    const username = user?.email.split("@"); 
    const handleAuthentification = () => {
      if (user){
        
        auth.signOut();
      }
    }
    
    
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
    <Link to={!user && '/login'} className='header__link'>
    <div onClick={handleAuthentification} className="header__option"> {/* redirect only if there is no user so when we disconnect we stay on the homepage */}
        <span className="header__optionLineOne">Bonjour {user ? username[0] : ''} </span>
        <span className="header__optionLineTwo">{user?'Déconnexion' : 'Connexion'}</span>
    </div>
</Link>

<Link to='/' className='header__link'>
    <div className="header__option">
        <span className="header__optionLineOne">Retours</span>
        <span className="header__optionLineTwo">& commandes</span>
    </div>
</Link>



        {/* BASKET ICON */}
        {user ?  <Link to="/checkout" className='header__link'>
    <div className="header__optionBasket">
    <IconButton style={{ color:"white"}} aria-label="cart">
      <StyledBadge badgeContent={basket?.length} >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </div>
    </Link> : ''}

</div>

</nav>
)
}

export default Header;