import Container from '../container/container';
import styles from './scss/style.module.scss';
// import styles from './scss/delivery.module.scss';

const FeedBack = () => {
  
  return (
    <>
      <Container>
        <>
          <div className={styles.feedback__wrap}>
            <div className={styles.feedback__bblock}>
              <div className={styles.feedback__bblock1}></div>
            </div>
            <div className={styles.feedback__bblock}>
              <div className={styles.feedback__bblock2}></div>
            </div>
          </div>

          <div className={styles.feedback__box1}>
            <input className={styles.feedback__input1} />
            <button className={styles.feedback__button1}>Отправить</button>
          </div>
        </>
      </Container>
    </>
  );
};

export default FeedBack;


// https://codesandbox.io/s/wizardly-night-ul6hr?file=/src/index.js:0-60