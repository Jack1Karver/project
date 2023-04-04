import { observer } from 'mobx-react';
import { useEffect, useMemo } from 'react';
import { CoincidencesStore } from '../../stores/coincidences.store';
import UserStore from '../../stores/user.authorized.store';
import styles from './scss/offer-exchange.module.scss';
import { ICoincidence } from '../../interfaces/coincidens.interface';
import Button from '../button/button';
import rowStyles from '../rows/scss/rows.module.scss'
import { saveExchangeList } from '../../requests/exchange.requests';

enum types {
  full = 'Полное совпадение',
  partial = 'Частичное совпадение',
}

type OfferExchangeProps = {
  showMe: (key: number)=>void
}

const OfferExchange = observer(({showMe}: OfferExchangeProps) => {
  const { userAuthorized } = useMemo(() => new UserStore(), []);
  const coincidencesStore = useMemo(() => new CoincidencesStore(userAuthorized?.id), []);

  useEffect(() => {
    if (userAuthorized?.id) {
      coincidencesStore.setCoencidences(userAuthorized.id);
    }
  }, [userAuthorized]);
  console.log(coincidencesStore.coincidences)

  const startExchange = (row: ICoincidence) => {
    console.log(row)
    saveExchangeList(row)
    showMe(2)
  };

  return (
    <div className={styles.offerExchange}>
      {coincidencesStore.coincidences && (
        <div className={styles.offerExchange__block}>
          {Object.keys(coincidencesStore.coincidences).map(type => {
            return (
              <>
                <h3>{types[type]}</h3>
                <div className={rowStyles.rows}>
                {coincidencesStore.coincidences![type].map((coinc: ICoincidence) => {
                  const row = {
                    userName: coinc.user.userName,
                    city: coinc.address.addrCity,
                    rating: coinc.user.rating,
                  };
                  return (
                    <>
                    <div className={rowStyles.rows__row}>
                      {Object.values(row).map((value: any) => {
                        return <div className={rowStyles.rows__value}>{value}</div>;
                      })}
                      <Button size={'sm'} mod={'blue'} content={'Начать обмен'} onClick={()=>startExchange(coinc)}/>
                      </div>
                    </>
                  );
                })}
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default OfferExchange;
