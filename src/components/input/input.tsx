import { EventHandler } from 'react';
import styles from './scss/input.module.scss';
type InputProps = {
  type: string;
  placeholder?: string;
  mod?: 'brand' | 'default';
  label?: string;
  title?: string;
  maxLength?: number;
  onChange?: EventHandler<any>
};

const Input = (props: InputProps) => {
  return (
    <>
      {props.type !== 'checkbox' ? (
        <>
          {props.title ? <h3>{props.title}</h3> : ''}
          <input
            className={`${styles.input} ${props.mod ? styles[`input--${props.mod}`] : ''}`}
            type={props.type}
            placeholder={props.placeholder}
            maxLength={props.maxLength ? props.maxLength : 1000}
            onChange={props.onChange}
          />
        </>
      ) : (
        <div className={styles.input__checkbox}>
          <input type={props.type} />
          <label>{props.label}</label>
        </div>
      )}
    </>
  );
};

export default Input;
