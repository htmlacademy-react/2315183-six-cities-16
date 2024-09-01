import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo.tsx';
import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../hooks/index.ts';
import { loginAction } from '../../store/api-actions.ts';
import { Link } from 'react-router-dom';
import { Cities } from '../../const.ts';
import { changeCity } from '../../store/city-process/city-process.ts';

function LoginPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const randomCity = Object.values(Cities)[Math.floor(Math.random() * Object.entries(Cities).length)];

  const submitFormHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(emailRef.current !== null && passwordRef !== null) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current?.value
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form" action="#" method="post"
              onSubmit={submitFormHandler}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input" type="email" name="email" placeholder="Email" required
                  ref={emailRef}
                  data-testid="emailElement"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input" type="password" name="password" placeholder="Password" required
                  ref={passwordRef}
                  data-testid="passwordElement"
                />
              </div>
              <button
                className="login__submit form__submit button" type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/" onClick={() => {
                dispatch(changeCity(randomCity));
              }}
              >
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
