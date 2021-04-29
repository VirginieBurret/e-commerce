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
        .then(auth => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const loginUser = (e) => {
        
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
          
    }

    return(

<div className="login">
    <Link>
    <img style={{height:"20rem"}}className="login__logo" src={`${process.env.PUBLIC_URL}/IMAGES/logo.png`} alt="logo"/>
    </Link>
    <div className="login__container">
        <h1>Connexion</h1>
        <form action="">
            <h5 style={{marginBottom:"5px"}}>Email</h5>
            <input value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} type="email"/>
            <h5 style={{marginBottom:"5px"}}>Mot de passe</h5>
            <input value={userPassword} onChange={(e)=> setUserPassword(e.target.value)}type="password"/>
            <button onClick={loginUser} type="submit" className="login__signInButton">Connexion</button>
            <p>En me connectant j'accepte les conditions générales</p>
            <button onClick={signUpUser} className="login__registerButton">Je créer mon compte</button>
        </form>
    </div>
</div>
    )
}

export default Login;