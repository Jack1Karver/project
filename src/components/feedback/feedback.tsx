import { observer } from 'mobx-react';
import { useEffect, useMemo } from 'react';
import { CoincidencesStore } from '../../stores/coincidences.store';
import UserStore from '../../stores/user.authorized.store';
import Rows from '../rows/rows';
import Container from '../container/container';
import styles from './scss/style.module.scss'
import { ICoincidence } from '../../interfaces/coincidens.interface';

enum types {
  full= 'Полное совпадение',
  partial = 'Частичное совпадение',
  another = 'Интересные предложения'
}

const FeedBack = observer(() => {
  const { userAuthorized } = useMemo(() => new UserStore(), []);
  const coincidencesStore  = useMemo(() => new CoincidencesStore(userAuthorized?.id), []);

  useEffect(()=>{
    if(userAuthorized?.id){
    coincidencesStore.setCoencidences(userAuthorized.id)
    }
  }
  ,[userAuthorized]);
  return (
    <Container>
    <div  className ={styles.feedback}>
      {coincidencesStore.coincidences && (
        <div className={styles.feedback__block}>
          {Object.keys(coincidencesStore.coincidences).map(type=>{
            return (
            <>
            <h3>{types[type]}</h3>
            <Rows rows={(coincidencesStore.coincidences![type]).map((row: ICoincidence)=>{
              return {
                userName: row.user.userName,
                city: row.address.addrCity,
                rating: row.user.rating
              }
            })} />
            </>)
          })}
          
        </div>
        
      )}
    </div>
    </Container>
  );
});

export default FeedBack;
