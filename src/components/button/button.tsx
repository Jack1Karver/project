import { MouseEventHandler } from 'react';
import styles from './scss/styles.module.scss';

type ButtonProps = {
  mod?: 'blue' | 'grey' | 'empty';
  size?: 'wide' | 'md' | 'xs';
  content: string;
  onClick?: MouseEventHandler;
};

const Button = ({ size, content, mod, onClick }: ButtonProps) => {

  return (
    <button
      className={`${styles.button} ${mod ? styles[`button--${mod}`] : ''} ${styles[`button--${size}`]}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
