import Columns from '../columns/columns';
import styles from './scss/block.module.scss';
import Container from '../container/container';
import { useEffect, useMemo, useState } from 'react';
import UserStore from '../../stores/user.authorized.store';
import FormStore from '../../stores/form.store';
import { USER_FIELDS } from '../../config/fields.config';
import Input from '../input/input';
import { observer } from 'mobx-react';
import moment from 'moment';
import { IUserExtended } from '../../models/user.model';
 
  
type ProfileBlockProps = {
  user: IUserExtended;
};

const ProfileBlock = observer(({ user }: ProfileBlockProps) => {
  const formStore = useMemo(() => new FormStore(USER_FIELDS), []);

  const userAuth = Object.assign({}, user);
  userAuth.createdAt = moment(user.createdAt, 'YYYY-MM-DD').format('DD-MM-YYYY');
  Object.keys(userAuth).map(key => {
    if (formStore.fields[key]) {
      formStore.setField(key, userAuth[key]);
    }
  });

  return (
    <div className={styles.profile}>
      <aside className={styles.profile__aside}>
      {/* <div className={styles.inlineBlock}>
    
        <div id="line_block" className={styles.inlineBlock1}>
          <h2>Смелый заяц</h2> 
          <span className={styles.text3}>Предложение для обмена</span>
          <span className={styles.text3}>Хочу обменять</span>
          <span className={styles.text3}>Хочу получить</span>
          <span className={styles.text3}>Активные обмены</span>
          <span className={styles.text3}>Отзывы на книги</span>
          <span className={styles.text3}>Личные данные</span>
          <span className={styles.text3}>Сообщения</span>
          <span className={styles.text3}>Выход</span>
        </div>
    
        <div id="line_block" className={styles.inlineBlock2}>
          <div className={styles.row}>
            <span className={styles.text4} >Полное совпадение</span>
            <div className={styles.col3}></div>
    
            <span className={styles.text4}>Частичное совпадение</span>
            <div className={styles.col3}></div>
    
            <span className={styles.text4}>Другие интересные приложения</span>
            <div className={styles.col3}></div>
          </div>
          
        </div> 
      </div>
      </>); */}
        </aside> 
          <Container>
            <div className={styles.profile__block}>
              <h1>Профиль</h1>
              <div className={styles.profile__inputs}>
                {Object.keys(formStore.fields).map(key => {
                  const params = formStore.fieldsParams[key];
                  return (
                    <Input
                      key={key}
                      type={params.type}
                      placeholder={params.placeholder}
                      title={params.title}
                      defaultValue={formStore.fields[key].value ? formStore.fields[key].value : undefined}
                      disabled={params.disabled}
                      onChange={e => formStore.setField(formStore.fields[key].name, e.target.value)}
                    />
                  );
                })}
              </div>
            </div>
          </Container>
        
    </div>
  );
});

export default ProfileBlock;
