import style from '../CSS/Login.module.css';
import React, { useRef, useEffect } from 'react';

function Login() {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;

    const handleRegisterClick = () => {
      container.classList.add(style.active);
    };

    const handleLoginClick = () => {
      container.classList.remove(style.active);
    };

    registerBtn.addEventListener('click', handleRegisterClick);
    loginBtn.addEventListener('click', handleLoginClick);

    return () => {
      registerBtn.removeEventListener('click', handleRegisterClick);
      loginBtn.removeEventListener('click', handleLoginClick);
    };
  }, []); 

  return (
    <>
      <div ref={containerRef} className={style.container} id="container">
        <div className={`${style.formContainer} ${style.signUp}`}>
          <form>
            <h1>Registre-se</h1>
            <span>Informe seus dados para registro</span>
            <input type="text" placeholder="Nome" />
            <input type="tel" id="telefone" placeholder="Número" maxLength="15" />
            <input type="email" placeholder="Email" />
            <div className={style.passwordContainer}>
              <input type="password" id="senhaSignup" placeholder="Senha" />
              <img src={require('../../assets/icon/eyeClose.png')} alt="Senha Oculta" className={style.togglePassword}/> 
            </div>
            <button type="button">Registre-se</button>
          </form>
        </div>
        <div className={`${style.formContainer} ${style.signIn}`}>
          <form>
            <h1>Login</h1>
            <span>Use seu email e senha</span>
            <input type="email" placeholder="Email" />
            <div className={style.passwordContainer}>
              <input type="password" id="senhaSignin" placeholder="Senha" />
              <img src={require('../../assets/icon/eyeClose.png')} alt="Senha Oculta" className={style.togglePassword} />
            </div>
            <a href="https://">Esqueceu sua senha?</a>
            <button type="button">Login</button>
          </form>
        </div>
        <div className={style.toggleContainer}>
          <div className={style.toggle}>
            <div className={`${style.togglePanel} ${style.toggleLeft}`}>
              <h1>Seja Bem vindo</h1>
              <p>Já tem cadastro? Faça login clicando no botão abaixo!</p>
              <button ref={loginBtnRef} className={style.hidden} id="login" type="button">Login</button>
            </div>
            <div className={`${style.togglePanel} ${style.toggleRight}`}>
              <h1>Olá, Amigo!</h1>
              <p>Novo por aqui? Cadastre-se agora e aproveite todas as funcionalidades!</p>
              <button ref={registerBtnRef} className={style.hidden} id="register" type="button">Registre-se</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
