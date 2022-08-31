
import img from './assets/orca.png'
import './styles.css'
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

  return (
    <div className="container">
        <div className="container-login">
          <div className="wrap-login">
              <form className="login-form">
                <span className="login-form-title">Bem vindo!</span>
                <span className="login-form-title">
                  <img src="{img}" alt=""/>
                </span>

                <div className="wrap-input">
                  <input className = {email !== "" ? 'has-val input' : 'input'} type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                  <span className="focus-input" data-placeholder='Email'></span>
                </div>

                <div className="wrap-input">
                  <input className= {password !== "" ? 'has-val input' : 'input'} type="password" />
                  <span className="focus-input" data-placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>

                <div className="text-center">
                  <span className="text1">Não possui conta?</span>
                  <a className="text2" href='#'>Criar conta. </a>
                </div>
              </form>
          </div>
        </div>
    </div>
  );
}

export default App;
