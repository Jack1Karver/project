import { ADDRESS_FIELDS, SIGN_UP_FIELDS } from '../../config/fields.config';
import Button from '../button/button';
import Container from '../container/container';

import styles from './scss/signup.module.scss';
import FormStore from '../../stores/form.store';
import { useMemo } from 'react';
import { observer } from 'mobx-react';
import { IUser } from '../../models/user.model';
import { signIn } from '../../requests/auth.requests';
import Router from 'next/router';
import Columns from '../columns/columns';
import InputBlock from '../input/input-block';
import { IUserAddress } from '../../models/user-address.model';

const SignUp = observer(() => {
  const signUpFormStore = useMemo(() => new FormStore(SIGN_UP_FIELDS), []);
  const addressFormStore = useMemo(() => new FormStore(ADDRESS_FIELDS), []);

  const signUp = async () => {
    const user = signUpFormStore.getFieldsAccumulator() as IUser;
    const address = addressFormStore.getFieldsAccumulator() as IUserAddress;
    if (!(signUpFormStore.validateFields() && addressFormStore.validateFields())) {
      alert('Проверьте заполнение полей');
      return;
    }
    let result = await signIn(user, address);
    if (result.error) {
      alert(result.error);
    } else {
      Router.push('/login');
      alert('Успешно');
    }
  };

  return (
    <>
      <Container>
        <div className={styles.signup}>
          <div className={styles.signup__block}>
            <Columns
              left={<InputBlock formStore={signUpFormStore} />}
              right={<InputBlock formStore={addressFormStore} />}
            />
          </div>
          <Button size={'wide'} mod={'blue'} content={'Зарегестрироваться'} onClick={signUp} />
        </div>
      </Container>
    </>
  );
});

export default SignUp;
