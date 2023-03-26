import Container from './scss/news.module.scss';
import styles from './scss/news.module.scss';


import Exchange from '../exchange/exchange';
import Receiving from '../receiving/receiving';
import Offerexchange from '../offerexchange/offerexchange';
import Activeexchanges from '../activeexchanges/activeexchanges';
import Myarchive from '../myarchive/myarchive';
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import CheckboxStore from '../../stores/checkbox.store';

// export enum TabType {
//   offerexchange = 'offerexchange',
//   exchange = 'exchange',
//   receiving = 'receiving',
//   activeexchanges = 'activeexchanges',
//   reviews = 'reviews',
//   personaldata = 'personaldata',
//   message_str = 'message_str',
//   archive = 'archive',
//   exit = 'exit',
// }

// export enum TabTypeName {
//   offerexchange = 'Предложение для обмена',
//   exchange = 'Хочу обменять',
//   receiving = 'Хочу получить',
//   activeexchanges = 'Активные обмены',
//   reviews = 'Отзывы на книги',
//   personaldata = 'Личные данные',
//   message_str = 'Сообщения',
//   archive = 'Архив',
//   exit = 'Выход'
// }

interface TabType {
  type: string;
  title: string;
  content: ReactElement;
}
const News = () => {
  const [activeTab, setActiveTab] = useState<TabType>();

  const checkboxStore = useMemo(() => new CheckboxStore(), []);

  const tabs = [
    {
      type: 'offerexchange',
      title: 'Предложение для обмена',
      content: <Offerexchange />,
    },
    {
      type: 'activeexchanges',
      title: 'Активные обмены',
      content: <Activeexchanges />,
    },
    {
      type: 'myarchive',
      title: 'Архив',
      content: <Myarchive />,
    },
    {
      type: 'myarchive',
      title: 'Личные данные',
      content: <Myarchive />,
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
          className={`${styles['news__tab']} ${
            activeTab?.type === tab.type ? styles['news__tab--active'] : ''
          }`}
          onClick={() => showMe(key)}
        >
          {tab.title}
        </li>
      );
    });
  }

{/* <div className={styles.messages__output}>{activeTab?.content}</div> */}
type Props = {
  children: ReactElement;
};
const Container = ({ children }: Props) => {
  
  return <div className={styles.container}>{children}</div>;
};



  return (
   
    <>
      
      <Container>
        
        <>
        {/* <h1 className={styles['news__teg']}>Мой профиль</h1> */}
      <Container>
        <ul className={styles['news__tabs']}>{getTabs()}</ul>
      </Container>
      <Container>
        <div className={styles.news__output}>{activeTab?.content}</div>
      </Container>
        </>
      </Container>
          
    </>

    
  );
};

export default News;
