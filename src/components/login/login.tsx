import Router from 'next/router';
import Columns from '../columns/columns';
import Button from '../button/button';
import Input from '../input/input';
import styles from './scss/login.module.scss';
import { useMemo } from 'react';
import FormStore from '../../stores/form.store';
import { LOGIN_FIELDS } from '../../config/fields';
import { loginRequest } from '../../requests/auth.requests';
import { ILoginUser } from '../../models/user.model';

const Login = () => {
  const formStore = useMemo(() => new FormStore(LOGIN_FIELDS), []);

  const goToSignUp = () => {
    Router.push('/signup');
  };

  const login = async () => {
    const fields = formStore.getFieldsAccumulator();
    const result = await loginRequest(fields as ILoginUser);
    localStorage.setItem('Authorization', result?.token!)
    Router.push('/')
  };

  return (
    <>
      <div className={styles.login}>
      
            <div className={styles.login__block}>
              <h3 className={styles.login__title}>Войти</h3>
              <div className={styles.login__form}>
                {Object.keys(formStore.fields).map(key => {
                  const params = formStore.fieldsParams[key];
                  return (
                    <Input
                      key={key}
                      type={params.type}
                      placeholder={params.placeholder}
                      title={params.title}
                      onChange={e => formStore.setField(formStore.fields[key].name, e.target.value)}
                    />
                  );
                })}
                <Button mod="blue" content={'Войти'} onClick={login} />
                <div className={styles.login__signup}>
                  <span className={styles['login__signup-text']}>Нет аккаунта?</span>
                  <Button mod="blue" content={'Регистрация'} onClick={goToSignUp} />                  
                </div>
              </div>
            </div>
          
      </div>
    </>
  );
};

export default Login;
