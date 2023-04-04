
import styles from './scss/main-screen.module.scss';
import Container from '../container/container';
import { COMMON_LABELS } from '../../config/labels.config';


const MainScreen = () => {

  return (
    <>
      <Container>
        <div className={styles.main}>
          <h3 className={styles.main__block_text} dangerouslySetInnerHTML={{ __html:COMMON_LABELS.mainDesc }}/>
        </div>
      </Container>
    </>
  );
};

export default MainScreen;
