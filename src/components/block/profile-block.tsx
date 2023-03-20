import Columns from '../columns/columns';
import styles from './scss/block.module.scss';
import Image from 'next/image';

import Avatar from '../../resources/img/avatar1.jpg';
import image from '../../resources/img/image.jpg';
import Button from '../button/button';
import moment from 'moment';
import Container from '../container/container';

const ProfileBlock = () => {
  return (<>
  <div className={styles.inlineBlock}>

    <div id="line_block" className={styles.inlineBlock1}>
      <h2>Смелый заяц</h2> 
      <span className={styles.text3}>Предложение для обмена</span>
      <span className={styles.text3}>Хочу обменять</span>
      <span className={styles.text3}>Хочу получить</span>
      <span className={styles.text3}>Активные обмены</span>
      <span className={styles.text3}>Отзывы на книги</span>
      <span className={styles.text3}>Личные данные</span>
      <span className={styles.text3}>Сообщения</span>
      <span className={styles.text3}>Выход</span>
    </div>

    <div id="line_block" className={styles.inlineBlock2}>
      <div className={styles.row}>
        <span className={styles.text4} >Полное совпадение</span>
        <div className={styles.col3}></div>

        <span className={styles.text4}>Частичное совпадение</span>
        <div className={styles.col3}></div>

        <span className={styles.text4}>Другие интересные приложения</span>
        <div className={styles.col3}></div>
      </div>
      
      
      
      
    </div> 


  </div>
  </>);
  
};

export default ProfileBlock;
