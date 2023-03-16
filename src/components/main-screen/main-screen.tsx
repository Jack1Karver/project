
import styles from './scss/main-screen.module.scss';
import { useMemo } from 'react';
import FormStore from '../../stores/form.store';
import { LOGIN_FIELDS } from '../../config/fields';

import Container from '../container/container';
import { COMMON_LABELS } from '../../config/labels';

const MainScreen = () => {
  return (
    <>
        <Container>
        <div className={styles.main}>
        <h3 className={styles.main__block_text} dangerouslySetInnerHTML={{__html:COMMON_LABELS.mainDesc}}/>
        </div>
        </Container>
    </>
  );
};

export default MainScreen;
