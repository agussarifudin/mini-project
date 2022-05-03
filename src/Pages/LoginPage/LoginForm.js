import { useRef, useState, useEffect, useContext } from 'react';
import logo from '../../Asset/Images/dbo.png';
import HOME from '../ProductPage/home.js';
import './loginCSS.css'

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../Test/firebase';



const Login = () => {
    
    
    



    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
        
    }

    return (
        <>
            {success ? (
                
               <HOME/>
            ) : (
                <section className='bodyLogin'>
                  <div className='form'>
                    <img src={logo} className="app-logo"/>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit} className="login">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            
                        />
                        
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>

                        <button >GOOGLE SIGN IN</button>
                    </form>
                    <p>
                        
                    </p>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login