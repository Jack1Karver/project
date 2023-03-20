import React from 'react';
import styles from './scss/delivery.module.scss';
import Button from '../button/button';
interface DeliveryProps {
  className: string;
}
const delivery = ({ className }: DeliveryProps) => {
 return (
    <section className={className}>
      <form className={styles.form}>
        <form id="form1" className={styles.forms}>
          <label>
            <span className={styles.kategoty}>Город*</span>
            <input className={styles.kategoty_text1} type="text" placeholder="Москва" />
            <span className={styles.kategoty_text3}>Улица*</span>
            <input className={styles.kategoty_text2} type="text" placeholder="Название улицы" />
            
            <div>
              <span style={{margin:'0px 0px  0px -10px', padding:'15px'}}>Строение*</span>
              <span style={{margin:'0px 0px  0px -10px', padding:'67px'}}>Дом*</span>
              <span style={{margin:'0px 0px  0px -10px', padding:'50px'}}>Квартира*</span>
            </div>
            
            <div>    
              <input className={styles.kategoty_text1} type="number" placeholder="Номер" />
              <input className={styles.kategoty_text1} type="number"  placeholder="Дом" /> 
              <input className={styles.kategoty_text1} type="text" />
            </div>
            
            <div>
            <span className={styles.kategoty}>Индекс*</span>
            <input className={styles.kategoty_text1} type="text"  placeholder="Индекс" />
            </div>

            <div>
            <input type="checkbox" id="chec1" name="chec1"></input>
            <label>Сделать адресом по умолчанию</label>
            </div>
          </label>  
        </form>

        <form id="form2" className={styles.forms2}>
          <label>
            <span className={styles.kategoty}>Фамилия*</span>
            <input className={styles.kategoty_text1} type="text" placeholder="Фамилия" />
            <span className={styles.kategoty_text3}>Имя*</span>
            <input className={styles.kategoty_text2} type="text" placeholder="Имя" />
            <span className={styles.kategoty_text3}>Отчество (при наличии)*</span>
            <input className={styles.kategoty_text2} type="text" placeholder="Отчество" />
          </label>
        </form>

        <button className={styles.button2}> Назад </button>
        <button className={styles.button}>Подтвердить данные</button>

        <>
           {/* <Button size={'xs'} onClick={()=>Router.push('/exchange')} content={'Далее'} />  */}
          {/* <button className={styles.button}>Далее</button> */}
          
      </>
      </form>

      
      {/* http://javascript.ru/ui/tree */}
    </section>

    
  );
};

export default delivery;
