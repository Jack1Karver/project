import React from 'react';
import styles from './scss/exchange.module.scss';
import Button from '../button/button';
import Router from 'next/router';


const Tree = () => {
    return (
        <form id="form3" className={styles.form3}>
        <span className={styles.kategoty}>Категории</span>
        <div id="spisok">  
        </div>
      </form>
    );
  };
  
export default Tree;
  
