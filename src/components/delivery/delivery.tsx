import { useMemo, useState } from 'react';
import styles from './scss/delivery.module.scss';
import Button from '../button/button';
import Input from '../input/input';
import FormStore from '../../stores/form.store';
import { ADDRESS_FIELDS } from '../../config/fields.config';
import InputBlock from '../input/input-block';
import { setWish } from '../../requests/wish.request';
import UserStore from '../../stores/user.authorized.store';
import { IUserAddress } from '../../models/user-address.model';
import { observer } from 'mobx-react';
import CheckboxStore from '../../stores/checkbox.store';
import { toast } from 'react-toastify';
import Router from 'next/router';
interface DeliveryProps {
  setActive: (key: number) => void;
  checkedStore: CheckboxStore;
}
const delivery = observer(({ setActive, checkedStore }: DeliveryProps) => {
  const addressFormStore = useMemo(() => new FormStore(ADDRESS_FIELDS), []);
  const [defaultChecked, setDefaultAddress] = useState<boolean>(false);
  const [isDefault, setIsDefault] = useState<boolean>(false);
  const { userAuthorized } = useMemo(() => new UserStore(), []);

  const useDefault = () => {
    setDefaultAddress(!defaultChecked);
  };

  const setDefault = () => {
    setIsDefault(!isDefault);
  };

  const goNext = async () => {
    if (!userAuthorized) {
      toast.error('Чтобы продолжить авторизуйтесь');
      return;
    }
    const address = addressFormStore.getFieldsAccumulator() as IUserAddress;

    address.isDefault = isDefault;
    address.idUser = userAuthorized.id!;
    console.log(address);
    await setWish(userAuthorized.id!, checkedStore.checked, address, defaultChecked);
    toast.success('Успешно');
    Router.push('/');
  };

  const goBack = () => {
    setActive(0);
  };

  return (
    <div className={styles.delivery}>
      <div>
        <Input type={'checkbox'} label={'Использовать основной адрес'} onChange={useDefault} />
      </div>
      {
        <div className={styles.delivery__fields}>
          <InputBlock disabled={defaultChecked} formStore={addressFormStore} />
          <Input disabled={defaultChecked} type={'checkbox'} label={'Сделать основным'} onChange={setDefault} />
        </div>
      }
      <div className={styles.delivery__buttonBlock}>
        <Button content={'Назад'} onClick={goBack} size={'sm'} mod={'blue'} />
        <Button content={'Подтвердить'} onClick={goNext} size={'sm'} mod={'blue'} />
      </div>
    </div>
  );
});

export default delivery;
