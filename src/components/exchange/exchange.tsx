import React, { useMemo, useState } from 'react';
import styles from './scss/exchange.module.scss';
import Button from '../button/button';
import Input from '../input/input';
import FormStore from '../../stores/form.store';
import { AUTHOR_FIELDS, BOOK_FIELDS, OFFER_FIELDS } from '../../config/fields.config';
import InputBlock from '../input/input-block';
import CheckboxTree from 'react-checkbox-tree';
import ArrowDown from 'src/resources/img/arrow-down.svg';
import { CHECKBOX_TREE } from '../../config/checbox-tree.config';
import UserStore from '../../stores/user.authorized.store';
import { IAuthor } from '../../models/author.model';
import { IBookLiteraly } from '../../models/book-literaly.model';
import { IOfferList } from '../../models/offer-list.model';
import { createOfferRequest } from '../../requests/create-offer.requests';

interface ExchangeProps {
  setActive: (key: number) => void;
}
const Exchange = ({ setActive}: ExchangeProps) => {
  const [checkedExchange, setChecked] = useState<string[]>([])
  const authorFormStore = useMemo(() => new FormStore(AUTHOR_FIELDS), []);
  const bookFormStore = useMemo(() => new FormStore(BOOK_FIELDS), []);
  const offerFormStore = useMemo(() => new FormStore(OFFER_FIELDS), []);
  const {userAuthorized} = useMemo(()=> new UserStore, [])

  const goNext = async () => {
    if(!userAuthorized){
      alert('Чтобы продолжить авторизуйтесь')
      return
    }
    const author = authorFormStore.getFieldsAccumulator() as IAuthor
    const bookLit = bookFormStore.getFieldsAccumulator() as IBookLiteraly;
    const offer = offerFormStore.getFieldsAccumulator() as IOfferList
    createOfferRequest(userAuthorized.id!, offer, bookLit, author, checkedExchange).then(()=>{
      alert('Успешно')
      setActive(1);
    })
    
   
  };

  
  return (
    <>
      <div className={styles.exchange}>
        <div className={styles.exchange__forms}>
          <div className={styles.exchange__formBlock}>
            <InputBlock title={'Автор'} titleType={'small'} formStore={authorFormStore} />
          </div>
          <div>
            <InputBlock title={'Книга'} titleType={'small'} formStore={bookFormStore} />
            <div></div>
            <InputBlock titleType={'small'} formStore={offerFormStore} />
          </div>
        </div>
        <div className={styles.exchange__tree}>
        <CheckboxTree
          checked={checkedExchange}
          nodes={CHECKBOX_TREE}
          onCheck={setChecked}
        />
        </div>
      </div>
      <div className={styles.exchange__buttonBlock}>
        <Button className={styles.exchange__button} content={'Подтвердить'} onClick={goNext} size={'sm'} mod={'blue'} />
      </div>
    </>
  );
};

export default Exchange;
