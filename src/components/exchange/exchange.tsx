import React from 'react';
import styles from './scss/exchange.module.scss';
import Button from '../button/button';
import Router from 'next/router';
import Tree from './tree';
import Delivery from '../delivery/delivery';

interface ExchangeProps {
  className: string;
}
const exchange = ({ className }: ExchangeProps) => {
  
  return (
    <section className={className}>
      <form className={styles.form}>
        <form id="form1" className={styles.form1}>
          <label>
            <span className={styles.kategoty}>Автор*</span>
            <input className={styles.kategoty_text1} type="text" name="firsname" placeholder="Фамилия" />
            <input style={{ margin: '10px 5px', background: 'white' }} type="text" name="name" placeholder="Имя" />
            <span className={styles.kategoty_text3}>Название книги*</span>
            <input className={styles.kategoty_text2} type="text" name="firsname" placeholder="Название книги" />
          </label>
        </form>

        <form id="form2" className={styles.form2}>
          <label>
            <span className={styles.kategoty}>ISBN</span>
            <input className={styles.kategoty_text1} type="text" name="firsname" placeholder="978-5-93673-265-2" />
            <span className={styles.kategoty_text3}>Год издания*</span>
            <input className={styles.kategoty_text2} type="text" name="firsname" placeholder="2012" />
          </label>
          </form>

          <form id="form2" className={styles.form3}>
            <span >Категории</span>
            <div id='spisok'></div>
          </form>
        
        

        <>
           {/* <Button size={'xs'} onClick={()=>Router.push('/exchange')} content={'Далее'} />  */}
          <button className={styles.button}>Далее</button>
          
      </>
      </form>

      
      {/* http://javascript.ru/ui/tree */}
    </section>

    
  );

  
};

export default exchange;
