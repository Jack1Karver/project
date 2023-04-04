import { useMemo } from 'react';
import styles from './scss/active-exchanges.module.scss';
import { IUserExtended } from '../../models/user.model';
import { observer } from 'mobx-react';
import ExchangeStore from '../../stores/exchange.store';
import Button from '../button/button';
import { saveTrackNumberRequest, setReceivingRequest, submitExchangeRequest } from '../../requests/exchange.requests';
import Input from '../input/input';
import FormStore from '../../stores/form.store';
import { TRACK_FIELDS } from '../../config/fields.config';

type ActiveProps = {
  user: IUserExtended;
  active: boolean;
};

const ActiveExchanges = observer(({ user, active }: ActiveProps) => {
  const exchangeStore = useMemo(() => new ExchangeStore(active, user.id!), []);
  const formStore = useMemo(() => new FormStore(TRACK_FIELDS), []);
  console.log(exchangeStore.exchanges);

  const submitExchange = async (id: number) => {
    await submitExchangeRequest(id);
    exchangeStore.setActiveExchanges(user.id!);
  };

  const saveTrackNumber = async (id: number) => {
    console.log(id);
    const track = formStore.getFieldsAccumulator() as {trackNumber: string};
    await saveTrackNumberRequest(id, track.trackNumber);
    exchangeStore.setActiveExchanges(user.id!);
  };

  const setReceiving = async (idOffer: number, idExchange: number)=>{
    await setReceivingRequest(idOffer, idExchange);
    exchangeStore.setActiveExchanges(user.id!);
  };

  return (
    <>
      <div className={styles.activeexchanges__wrap}>
        {exchangeStore.exchanges.map(exc => {
          const address = exc.userOffer.address;
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
                  {exc.isBoth && (
                    <>
                      <label>Адрес: </label>
                      {address.addrIndex}
                      {', '}
                      {address.addrCity}
                      {', '}
                      {address.addrStreet}
                      {', '}
                      {address.addrHouse}
                      {', '}
                      {address.addrStructure}
                      {', '}
                      {address.addrApart}
                      <label>Номер отправления:</label>
                      {exc.userOffer.trackNumber && exc.myOffer.trackNumber ? exc.userOffer.trackNumber : ''}
                      <label>{exc.myOffer.trackNumber && <>{exc.userOffer.receiving ? 'Получено' : 'Не получено'}</>}</label>
                    </>
                  )}
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
                      <Button size={'sm'} mod={'blue'} content={'Подтвердить'} onClick={() => submitExchange(exc.id)} />
                    )}
                    {exc.isBoth && (
                      <>
                        <label>Номер отправления:</label>
                        {exc.myOffer.trackNumber ? (
                          <>{exc.myOffer.trackNumber}</>
                        ) : (
                          <>
                            {Object.keys(formStore.fields).map(key => {
                              const params = formStore.fieldsParams[key];
                              return (
                                <Input
                                  key={key}
                                  type={params.type}
                                  placeholder={params.placeholder}
                                  title={params.title}
                                  // margin={'mb-0'}
                                  error={formStore.fields[key].error}
                                  onChange={e => formStore.setField(formStore.fields[key].name, e.target.value)}
                                />
                              );
                            })}
                            <Button size={'sm'} mod={'blue'} content={'Подтвердить'} onClick={()=>saveTrackNumber(exc.myOffer.idOffer)}></Button>
                          </>
                        )}
                        {exc.userOffer.trackNumber && exc.myOffer.trackNumber && (
                          <>
                            {exc.myOffer.receiving ? (
                              <label>{'Получено'}</label>
                            ) : (
                              <Button size={'sm'} mod={'blue'} content={'Получил'} onClick={()=>setReceiving(exc.myOffer.idOffer, exc.id)}/>
                            )}
                          </>
                        )}
                      </>
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

export default ActiveExchanges;
