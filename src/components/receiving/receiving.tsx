import React from 'react';
import styles from './scss/receiving.module.scss';
interface ReceivingProps {
  className: string;
}
const receiving = ({ className }: ReceivingProps) => {
  return <section className={className}>
    
    <>
    <form className={styles.form}>
        <span className={styles.form3}>Категории</span>
        <div className={styles.kategoty} id='spisok'></div>

        <>
           {/* <Button size={'xs'} onClick={()=>Router.push('/exchange')} content={'Далее'} />  */}
          <button className={styles.button2}> Назад </button>
          
      </>
        <>
           {/* <Button size={'xs'} onClick={()=>Router.push('/exchange')} content={'Далее'} />  */}
          <button className={styles.button}>Далее</button>
          
      </>
    </form>
    </>

  </section>;
};

export default receiving;
