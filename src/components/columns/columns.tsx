import { ReactNode } from 'react';

import styles from './scss/columns.module.scss';

type ColumnsProps = {
  left: ReactNode;
  right: ReactNode;
};
const Columns = ({ left, right }: ColumnsProps) => {
  return (
    <div className={styles.columns}>
      <div className={styles.columns__left}>{left}</div>
      <div className={styles.columns__right}>{right}</div>
    </div>
  );
};

export default Columns;
