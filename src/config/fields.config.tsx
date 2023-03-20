import { fieldTypesEnum } from '../enums/field-types.enum';
import { COMMON_LABELS } from './labels.config';
import { EMAIL_REGEX, PASSWORD_REGEX } from './regex.config';

export const SIGN_UP_FIELDS = {
  name: {
    type: fieldTypesEnum.text,
    placeholder: 'Ваше имя',
    title: 'Имя',
    require: true,
    disabled: false,
  },
  lastName: {
    type: fieldTypesEnum.text,
    placeholder: 'Ваша фамилия',
    title: 'Фамилия',
    require: true,
  },
  secondName: {
    type: fieldTypesEnum.text,
    placeholder: 'Ваше отчество',
    title: 'Отчество',
    require: false,
  },
  email: {
    type: fieldTypesEnum.text,
    placeholder: 'example@exampe.com',
    title: 'Электронная почта',
    require: true,
    pattern: EMAIL_REGEX,
    error: COMMON_LABELS.wrongFormat,
  },
  userName: {
    type: fieldTypesEnum.text,
    placeholder: 'Ваш псевдоним',
    title: 'Псевдоним',
    require: true,
  },
  password: {
    type: fieldTypesEnum.password,
    title: 'Пароль',
    require: true,
    pattern: PASSWORD_REGEX,
    error: 'Не менее 8 символов, пароль должен содержать цифры, заглавные и строчные буквы',
    length: {
      min: 8,
      error: 'Не менее 8 символов',
    },
  },
};

export const ADDRESS_FIELDS = {
  addrIndex:{
    type: fieldTypesEnum.number,
    placeholder: 'XXXXXX',
    title: 'Индекс',
    require: true,
    length: {
      min: 6,
      max: 6,
      error: 'Индекс должен содержать 6 цифр',
    },
  },
  addrCity:{
    type: fieldTypesEnum.text,
    title: 'Город',
    require: true,
    length: {
      max: 15,
      error: 'Не более 15 символов',
    },
  },
  addrStreet:{
    type: fieldTypesEnum.text,
    title: 'Улица',
    require: true,
    length: {
      max: 25,
      error: 'Не более 25 символов',
    },
  },
  addrHouse:{
    type: fieldTypesEnum.text,
    title: 'Номер дома',
    require: true,
    length: {
      max: 5,
      error: 'Не более 5 символов',
    },
  },
  addrStructure: {
    type: fieldTypesEnum.text,
    title: 'Номер строения',
    require: false,
    length: {
      max: 2,
      error: 'Не более 2 символов',
    },
  },
  addrApart:{
    type: fieldTypesEnum.text,
    title: 'Номер квартиры',
    require: false,
    length: {
      max: 3,
      error: 'Не более 3 символов',
    },
  },
};

export const LOGIN_FIELDS = {
  email: {
    type: fieldTypesEnum.text,
    placeholder: 'Электронная почта',
    require: true,
    disabled: false,
  },
  password: {
    type: fieldTypesEnum.password,
    placeholder: 'Пароль',
    require: true,
    disabled: false,
  },
};

export const USER_FIELDS = {
  name: {
    type: fieldTypesEnum.text,
    placeholder: 'Ваше имя',
    title: 'Имя',
    require: true,
  },
  lastName: {
    type: fieldTypesEnum.text,
    placeholder: 'Ваша фамилия',
    title: 'Фамилия',
    require: true,
  },
  secondName: {
    type: fieldTypesEnum.text,
    placeholder: 'Ваше отчество',
    title: 'Отчество',
    require: false,
  },
  email: {
    type: fieldTypesEnum.text,
    placeholder: 'example@exampe.com',
    title: 'Электронная почта',
    require: true,
  },
  userName: {
    type: fieldTypesEnum.text,
    placeholder: 'Ваш псевдоним',
    title: 'Псевдоним',
    require: true,
  },
  createdAt: {
    type: fieldTypesEnum.text,
    title: 'Дата регистрации',
    disabled: true,
  },
};