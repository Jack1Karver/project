import React from 'react';
import styles from './scss/myarchive.module.scss';
import Container from '../container/container';


const myarchive = () => {
  return (<>
    <Container>
      <>
    <div className={styles.activeexchanges__wrap}>
      <div className={styles.activeexchanges__bblock}>Мне</div>
      <div className={styles.activeexchanges__bblock}>Я</div>
    </div>
    </>
    </Container> 
 </>
)};

export default myarchive;


