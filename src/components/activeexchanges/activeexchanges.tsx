import React from 'react';
import Container from '../container/container';
import styles from './scss/activeexchanges.module.scss';


const activeexchanges = () => {
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

export default activeexchanges;


