import React, { ReactElement } from 'react';

import styles from 'src/components/input/error-message/scss/error-message.module.scss';

type ErrorMessageProps = {
  error: string;
};

export default function ErrorMessage({ error }: ErrorMessageProps): ReactElement {
  console.log(error)
  return <span className={styles['error-message']}>{error}</span>;
}
