import React, { useMemo } from 'react';
import Container from '../container/container';
import styles from './scss/activeexchanges.module.scss';
import { IUserExtended } from '../../models/user.model';
import { observer } from 'mobx-react';
import ExchangeStore from '../../stores/exchange.store';
import Button from '../button/button';

type ActiveProps = {
  user: IUserExtended;
  active: boolean;
};

const activeexchanges = observer(({ user, active }: ActiveProps) => {
  const { exchanges } = useMemo(() => new ExchangeStore(active, user.id!), []);
  console.log(exchanges);

  return (
    <>
      <div className={styles.activeexchanges__wrap}>
        {exchanges.map(exc => {
          return (
            <>
              <div className={styles.activeexchanges__titles}>
                <h3>Мне</h3>
                <h3>Я</h3>
              </div>
              <div className={styles.activeexchanges__exchanges}>
                <div className={styles.activeexchanges__block}>
                  <label>Пользователь: {exc.userOffer.user.userName}</label>
                  <label>Жанры: {exc.userOffer.categories.map(cat => cat.name).join(', ')}</label>
                  <label>{exc.userOffer.isSubmit ? 'обмен подтвержден' : 'обмен не подтвержден'}</label>
                </div>
                <div>
                  <div className={styles.activeexchanges__block}>
                    <label>
                      Автор: {exc.myOffer.author.firstName} {exc.myOffer.author.lastName}
                    </label>
                    <label>Книга: {exc.myOffer.book.bookName}</label>
                    {exc.myOffer.isSubmit ? (
                      <label>{'обмен подтвержден'}</label>
                    ) : (
                      <Button size={'sm'} mod={'blue'} content={'Подтвердить'} />
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
});

export default activeexchanges;
