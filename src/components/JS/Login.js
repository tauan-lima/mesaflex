import style from '../CSS/Login.module.css';
import React, { useRef, useEffect, useState } from 'react';
import eyeOpenIcon from '../../assets/icon/eyeOpen.png';
import eyeCloseIcon from '../../assets/icon/eyeClose.png';

function Login() {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);
  const [isPasswordVisibleSignup, setPasswordVisibleSignup] = useState(false);
  const [isPasswordVisibleSignin, setPasswordVisibleSignin] = useState(false);
  const [phone, setPhone] = useState('');

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

  const formatarTelefone = (event) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 11) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (value.length >= 2) {
      value = value.replace(/^(\d{2})(\d{0,5})(\d{0,4})$/, '($1) $2$3');
    }
    setPhone(value);
  };

  const togglePasswordSignup = () => {
    setPasswordVisibleSignup(!isPasswordVisibleSignup);
  };

  const togglePasswordSignin = () => {
    setPasswordVisibleSignin(!isPasswordVisibleSignin);
  };

  return (
    <>
      <div ref={containerRef} className={style.container} id="container">
        <div className={`${style.formContainer} ${style.signUp}`}>
          <form>
            <h1>Registre-se</h1>
            <span>Informe seus dados para registro</span>
            <input type="text" placeholder="Nome" />
            <input 
              type="tel" 
              placeholder="Número" 
              maxLength="15" 
              value={phone} 
              onChange={formatarTelefone} 
            />
            <input type="email" placeholder="Email" />
            <div className={style.passwordContainer}>
              <input 
                type={isPasswordVisibleSignup ? "text" : "password"} 
                id="senhaSignup" 
                placeholder="Senha" 
              />
              <img 
                src={isPasswordVisibleSignup ? eyeCloseIcon : eyeOpenIcon} 
                alt="Senha Oculta" 
                className={style.togglePassword} 
                onClick={togglePasswordSignup} 
                style={{ cursor: 'pointer' }} 
              />
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
              <input 
                type={isPasswordVisibleSignin ? "text" : "password"} 
                id="senhaSignin" 
                placeholder="Senha" 
              />
              <img 
                src={isPasswordVisibleSignin ? eyeCloseIcon : eyeOpenIcon} 
                alt="Senha Oculta" 
                className={style.togglePassword} 
                onClick={togglePasswordSignin} 
                style={{ cursor: 'pointer' }} 
              />
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
