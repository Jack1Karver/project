import { EventHandler } from 'react';
import styles from './scss/input.module.scss';
import ErrorMessage from './error-message/error-message';
type InputProps = {
  type: string;
  placeholder?: string;
  mod?: 'brand' | 'default';
  label?: string;
  title?: string;
  onChange?: EventHandler<any>;
  defaultValue?: string;
  disabled?: boolean;
  error?: string;

};

const Input = (props: InputProps) => {
  return (
    <>
      {props.type !== 'checkbox' ? (
        <div className={styles.input__block}>
          {props.title ? <h3 className={styles.input__title}>{props.title}</h3> : ''}
          <input
            className={`${styles.input} ${props.mod ? styles[`input--${props.mod}`] : ''} ${props.disabled ? styles[`input--disabled`]:''}`}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            disabled={props.disabled ? props.disabled : false}
            defaultValue={props.defaultValue ? props.defaultValue : undefined}
          />
          {props.error && <ErrorMessage error={props.error}/>}
        </div>
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
