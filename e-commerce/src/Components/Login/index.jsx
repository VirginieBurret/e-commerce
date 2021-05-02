import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../Config/firebase';
import {useState} from 'react';
import './login.scss';

const Login = () => {
    const history = useHistory();
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const signUpUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(userEmail, userPassword)
        .then((auth)=> {
            alert('Votre inscription est enregistrée, vous pouvez vous connecter')
        }) 
        .catch(e => alert(e.message))
    }

    const loginUser = (e) => {
        
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert('Identifiant ou mot de passe incorrect'))
          
    }

    return(

<div className="login">
    <Link>
    <img style={{height:"18rem"}}className="login__logo" src={`${process.env.PUBLIC_URL}/IMAGES/logo.png`} alt="logo"/>
    </Link>
    <div className="login__container">
        <h1>Connexion</h1>
        <form action="">
            <p style={{marginBottom:"5px", fontWeight:"bold"}}>Email</p>
            <input value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} type="email"/>
            <p style={{marginBottom:"5px",fontWeight:"bold"}}>Mot de passe</p>
            <input value={userPassword} onChange={(e)=> setUserPassword(e.target.value)}type="password"/>
            <button onClick={loginUser} type="submit" className="login__signInButton">Connexion</button>
            <p>En me connectant j'accepte les conditions générales d'utilisation et de vente. Pour plus d'informations, merci de consulter notre politique de confidentialité.</p>
            <button onClick={signUpUser} className="login__registerButton">Je créer mon compte</button>
        </form>

        
    </div>
    <Link to="/">
            <p>Retourner à l'accueil</p>
        </Link>
</div>
    )
}

export default Login;