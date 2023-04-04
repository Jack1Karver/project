import Router from 'next/router';
import Button from '../button/button';
import styles from './scss/login.module.scss';
import { useMemo } from 'react';
import FormStore from '../../stores/form.store';
import { LOGIN_FIELDS } from '../../config/fields.config';
import { loginRequest } from '../../requests/auth.requests';
import { ILoginUser } from '../../models/user.model';
import { COMMON_LABELS } from '../../config/labels.config';
import InputBlock from '../input/input-block';
import { toast } from 'react-toastify';

const Login = () => {
  const formStore = useMemo(() => new FormStore(LOGIN_FIELDS), []);

  const goToSignUp = () => {
    Router.push('/signup');
  };

  const login = async () => {
    const fields = formStore.getFieldsAccumulator();
    const result = await loginRequest(fields as ILoginUser);
    if (result.error){
      toast.error('Неправильное имя пользователя или пароль');
      return;
    }
    if(result.token){
      localStorage.setItem('Authorization', result.token);
      toast.success('Успешно');
      Router.push('/');
    }
  };

  return (
    <>
      <div className={styles.login}>
        <div className={styles.login__block}>
          <h3 className={styles.login__title}>{COMMON_LABELS.login}</h3>
          <div className={styles.login__form}>
            <InputBlock formStore={formStore}/>
            <Button mod="blue" content={COMMON_LABELS.login} onClick={login} />
            <div className={styles.login__signup}>
              <span className={styles['login__signup-text']}>{COMMON_LABELS.haveAccount}</span>
              <Button mod="blue" content={COMMON_LABELS.register} onClick={goToSignUp}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
