import Link from 'next/link';

import styles from './scss/menu.module.scss';
import { MENU_ITEMS } from '../../config/menu.config';
import { useLocale } from '../../hooks/use-locale';
const Menu = () => {

  return (
    <ul className={styles.menu}>
      {MENU_ITEMS.map((label, key) => {
        return (
          <li className={styles.menu__item}>
            <Link href={'/'}>
              <a>{label.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
