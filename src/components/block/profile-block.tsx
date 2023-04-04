import styles from './scss/block.module.scss';
import { useMemo } from 'react';
import FormStore from '../../stores/form.store';
import { USER_FIELDS } from '../../config/fields.config';
import Input from '../input/input';
import { observer } from 'mobx-react';
import moment from 'moment';
import { IUserExtended } from '../../models/user.model';

type ProfileBlockProps = {
  user: IUserExtended;
};

const ProfileBlock = observer(({ user }: ProfileBlockProps) => {
  const formStore = useMemo(() => new FormStore(USER_FIELDS), []);

  const userAuth = Object.assign({}, user);
  userAuth.createdAt = moment(user.createdAt, 'YYYY-MM-DD').format('DD-MM-YYYY');
  Object.keys(userAuth).map(key => {
    if (formStore.fields[key]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formStore.setField(key, userAuth[key]);
    }
  });

  return (
    <div className={styles.profile}>
      <div className={styles.profile__block}>
        <h1>Профиль</h1>
        <div className={styles.profile__inputs}>
          {Object.keys(formStore.fields).map(key => {
            const params = formStore.fieldsParams[key];
            return (
              <Input
                key={key}
                type={params.type}
                placeholder={params.placeholder}
                title={params.title}
                defaultValue={formStore.fields[key].value ? formStore.fields[key].value : undefined}
                disabled={params.disabled}
                onChange={e => formStore.setField(formStore.fields[key].name, e.target.value)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default ProfileBlock;
