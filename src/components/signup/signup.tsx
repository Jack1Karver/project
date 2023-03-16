import { ADDRESS_FIELDS, SIGN_UP_FIELDS } from '../../config/fields';
import Columns from '../columns/columns';
import Button from '../button/button';
import Container from '../container/container';
import Input from '../input/input';

import styles from './scss/signup.module.scss';
import FormStore from '../../stores/form.store';
import { useMemo } from 'react';
import { observer } from 'mobx-react';
import { IUser } from '../../models/user.model';
import { signIn } from '../../requests/auth.requests';
import  Router  from 'next/router';

const SignUp = observer(() => {
  const formStore = useMemo(() => new FormStore(SIGN_UP_FIELDS), []);

  const signUp = async () => {
    console.log(formStore.fields);
    const user = formStore.getFieldsAccumulator() as IUser

    console.log(user);
    let result;
    result = await signIn(user as IUser);
    if (result.error) {
      alert(result.error);
    } else {
      Router.push('/');
      alert(result.message);
    }
  };

  return (
    <>
      <Container>
        <div className={styles.signup}>
          <div className={styles.signup__block}>
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
          </div>
          <Button size={'wide'} mod={'blue'} content={'Зарегестрироваться'} onClick={signUp} />
        </div>
      </Container>
    </>
  );
});

export default SignUp;
