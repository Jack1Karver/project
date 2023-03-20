import { observer } from 'mobx-react';
import { Field } from '../../interfaces/form';
import FormStore from '../../stores/form.store';
import { useMemo } from 'react';
import Input from './input';

type InputBlockProps = {
  formStore: FormStore
};

const InputBlock = observer(({ formStore }: InputBlockProps) => {
  return (
    <>
      {Object.keys(formStore.fields).map(key => {
        const params = formStore.fieldsParams[key];
        return (
          <Input
            key={key}
            type={params.type}
            placeholder={params.placeholder}
            title={params.title}
            error={formStore.fields[key].error}
            onChange={e => formStore.setField(formStore.fields[key].name, e.target.value)}
          />
        );
      })}
    </>
  );
});

export default InputBlock
