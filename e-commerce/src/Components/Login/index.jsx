import {Link} from 'react-router-dom';
import './login.scss';
const Login = () => {

    return(

<div className="login">
    <Link>
    <img style={{height:"20rem"}}clasName="login__logo" src={`${process.env.PUBLIC_URL}/IMAGES/logo.png`} alt="logo"/>
    </Link>
    <div className="login__container">
        <h1>Connexion</h1>
        <form action="">
            <h5 style={{marginBottom:"5px"}}>Email</h5>
            <input type="email"/>
            <h5 style={{marginBottom:"5px"}}>Mot de passe</h5>
            <input type="password"/>
            <button type="submit" className="login__signInButton">Connexion</button>
            <p>En me connectant j'accepte les conditions générales</p>
            <button className="login__registerButton">Je créer mon compte</button>
        </form>
    </div>
</div>
    )
}

export default Login;