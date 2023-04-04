import styles from './scss/profile.module.scss';
import OfferExchange from '../offerexchange/offer-exchange';
import ActiveExchanges from '../activeexchanges/active-exchanges';
import { ReactElement, useEffect, useState } from 'react';
import { IUserExtended } from '../../models/user.model';
import { observer } from 'mobx-react';
import ProfileBlock from '../block/profile-block';
import Container from '../container/container';

interface TabType {
  type: string;
  title: string;
  content: ReactElement;
}

type ProfileBlockProps = {
  user: IUserExtended;
};

const Profile = observer(({ user }: ProfileBlockProps) => {
  const [activeTab, setActiveTab] = useState<TabType>();

  const tabs = [
    {
      type: 'user',
      title: 'Личные данные',
      content: <ProfileBlock user={user} />,
    },
    {
      type: 'offerexchange',
      title: 'Предложение для обмена',
      content: <OfferExchange showMe = {showMe}/>,
    },
    {
      type: 'activeexchanges',
      title: 'Активные обмены',
      content: <ActiveExchanges user={user} active={true}/>,
    },
    {
      type: 'myarchive',
      title: 'Архив',
      content: <ActiveExchanges user={user} active={false}/>,
    },
  ];

  useEffect(() => {
    setActiveTab(tabs[0]);
  }, []);

  function showMe(key: number) {
    setActiveTab(tabs[key]);
  }

  function getTabs() {
    return tabs.map((tab, key) => {
      return (
        <li
          key={key}
          className={`${styles['profile__tab']} ${activeTab?.type === tab.type ? styles['profile__tab--active'] : ''}`}
          onClick={() => showMe(key)}
        >
          {tab.title}
        </li>
      );
    });
  }

  return (
    <div className={styles.profile}>
      
      <Container className={styles.profile__tabsblock}>
        <ul className={styles.profile__tabs}>{getTabs()}</ul>
      </Container>
      <Container className={styles.profile__content}>
        <>
          {activeTab?.content}
        </>
      </Container>
    </div>
  );
});

export default Profile;
