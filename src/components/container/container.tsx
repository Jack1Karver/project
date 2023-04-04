import { ReactElement } from 'react';
import styles from './scss/container.module.scss';

type Props = {
  children: ReactElement;
  className?: string
};
const Container = ({ children , className}: Props) => {
  return <div className={`${styles.container} ${className ? className: ''}`}>{children}</div>;
};

export default Container;
