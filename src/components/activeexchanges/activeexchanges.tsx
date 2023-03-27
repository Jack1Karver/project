import React from 'react';
import Container from '../container/container';
import styles from './scss/activeexchanges.module.scss';


const activeexchanges = () => {
  return (<>
      <>
    <div className={styles.activeexchanges__wrap}>
      <div>
      <h3>Мне</h3>
      <div className={styles.activeexchanges__bblock}/>
      </div>
      <div>
      <h3>Я</h3>
      <div className={styles.activeexchanges__bblock}/>
      </div>
    </div>
    </>
 </>
)};

export default activeexchanges;


