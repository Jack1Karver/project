import Link from 'next/link';

import styles from './scss/menu.module.scss';
import { MENU_ITEMS } from '../../config/menu.config';
import { IUserExtended } from '../../models/user.model';

type MenuProps = {
  user: IUserExtended| null
}

const Menu = ({ user }:MenuProps) => {

  return (
    <ul className={styles.menu}>
      {MENU_ITEMS.map((label, key) => {
        
        return (
          <li key={label.id} className={styles.menu__item}>
            <Link href={label.link}>
              <a>{label.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
    
  );
};

export default Menu;
