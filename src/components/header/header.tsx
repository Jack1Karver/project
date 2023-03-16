import Link from 'next/link';
import styles from './scss/header.module.scss';
import Logo from '../../resources/img/logo.svg';
import Avatar from '../../resources/img/avatar1.jpg';
import Image from 'next/image';
import Menu from '../menu/menu';
import { observer } from 'mobx-react';
import { useMemo } from 'react';
import UserAuthorizedStore from '../../stores/user.authorized.store';
import Button from '../button/button';
import Router from 'next/router';

const Header = observer(() => {
  const {userAuthorized, logout} = useMemo(()=> new UserAuthorizedStore, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link href="/">
          <a className={styles.header__logo}>
            <h1>Book2Book</h1>
          </a>
        </Link>
        <div className={styles.header__menu}>
          <Menu />
        </div>
        {userAuthorized ? (
          <div className={styles.header__login}>
          <span className={styles.header__user}>{userAuthorized.userName}</span>
          <Button size={'xs'} onClick={logout} content={'Выйти'}/>
          </div>
        ): (
          <Button size={'xs'} onClick={()=>Router.push('/login')} content={'Войти'}/>
        )}
        
      </div>
    </header>
  );
});

export default Header;
