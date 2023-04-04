import { action, makeObservable, observable } from 'mobx';
import { Field, FormFieldState } from '../interfaces/form';
import { validateFormField } from '../utils/validation.utils';

class FormStore {
  fields: Record<string, FormFieldState> = {};
  fieldsParams: Record<string, Field> = {};
  constructor(params: { [key: string]: Field }) {
    makeObservable(this, {
      fields: observable,
      setFields: action,
      setField: action,
    });
    this.fieldsParams = params;
    this.setFields();
  }

  setFields = () => {
    this.fields = Object.keys(this.fieldsParams).reduce((acc, key) => {
      const field: FormFieldState = {
        name: key,
        value: ' ',
        error: '',
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      acc[key] = field;

      return acc;
    }, {});
  };

  setField = (name: string, value: string) => {
    this.fields[name].value = value;
    this.fields[name].error = validateFormField(this.fieldsParams[name], value);
  };

  validateFields = () => {
    return Object.values(this.fields).every(field => {
      field.error = validateFormField(this.fieldsParams[field.name], field.value);
      console.log(field.error);
      return !field.error;
    });
  };

  getFieldsAccumulator = () => {
    return Object.keys(this.fields).reduce((acc, key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      acc[key] = this.fields[key].value;
      return acc;
    }, {});
  };
}

export default FormStore;
