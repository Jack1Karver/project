import React, { useState } from 'react';
import styles from './scss/receiving.module.scss';
import Button from '../button/button';
import CheckboxTree from 'react-checkbox-tree';
import { CHECKBOX_TREE } from '../../config/checbox-tree.config';
import CheckboxStore from '../../stores/checkbox.store';
import { observer } from 'mobx-react';

interface ReceivingProps {
  setActive: (key: number) => void;
  checkedStore: CheckboxStore
}

const Receiving = observer(({ setActive, checkedStore }: ReceivingProps) => {
  const [checked, setChecked] = useState<string[]>([]);

  const goNext = () => {
    checkedStore.setChecked(checked);
    setActive(2);
  };
  const goBack = () => {
    setActive(0);
  };
  

  return (
    <div>
      <div className={styles.receiving__tree}>
        <CheckboxTree nodes={CHECKBOX_TREE} onCheck={setChecked} checked={checked}/>
      </div>
      <div className={styles.receiving__buttonBlock}>
        <Button content={'Назад'} onClick={goBack} size={'sm'} mod={'blue'} />
        <Button content={'Далее'} onClick={goNext} size={'sm'} mod={'blue'} />
      </div>
      </div>
  );
});

export default Receiving;
