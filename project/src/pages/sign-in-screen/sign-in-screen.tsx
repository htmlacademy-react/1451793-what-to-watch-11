import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';

import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AuthData } from '../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../const';

const SignInScreen = (): JSX.Element => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector((state) => state);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({ login: loginRef.current.value, password: passwordRef.current.value });
    }
  };

  return (
    <div className="user-page">
      <Helmet>
        <title>Что посмотреть. Авторизация</title>
      </Helmet>

      <header className="page-header user-page__head">
        <Logo isLogoLight={false} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={() => {
                if (authorizationStatus === AuthorizationStatus.Auth) {
                  navigate(AppRoute.Root);
                }
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignInScreen;
