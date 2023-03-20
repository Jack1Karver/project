import { ReactElement, useState } from 'react';
import Container from '../container/container';
import Image from 'next/image';
import avatar from 'src/resources/img/avatar1.jpg';
import styles from './scss/messages.module.scss';
import moment from 'moment';
import Columns from '../columns/columns';
import { action } from 'mobx';
import React, { useRef, useEffect} from 'react';
import Tabs1 from '../tabs/tabs1';
import Friends from '../friends/friends';
import Exchange from '../exchange/exchange';
import Delivery from '../delivery/delivery';
import Receiving from '../receiving/receiving';


export enum TabType {
  exchange = 'exchange',
  receiving = 'receiving',
  delivery = 'delivery',
}

export enum TabTypeName {
  exchange = 'Хочу обменять',
  receiving = 'Хочу получить',
  delivery = 'Адрес доставки',
}

const Messages = () => {
  const [activeTab, setActiveTab] = useState('');

  function showMe(type: string) {
    setActiveTab(type);
  }

  function getTabs() {
    const tabs = [];
    for (let key in TabType) {
      const className =
        activeTab === key ? `${styles.messages__tab} ${styles.messages__tabActive}` : styles.messages__tab;
      tabs.push(
        <li key={key} className={className} onClick={() => showMe(key)}>
          {TabTypeName[key]}
        </li>
      );
    }
    return tabs;
  }
  return (
    <>
     <h1 style={{textAlign:'center'}}>Бланк обмена</h1>
      <Container>
        <>
          <ul className={styles.messages__tabs}>{getTabs()}</ul>
          <div className={styles.messages__output}>
            {activeTab === TabType.delivery && <Delivery className={styles.messages__section_active} />}
            {activeTab === TabType.exchange && <Exchange className={styles.messages__section_active} />}
            {activeTab === TabType.receiving && <Receiving className={styles.messages__section_active} />}
          </div>
        </>
      </Container>
      </>

//  //</Container>   <ul className={styles.messages__tabs}>{getTabs()}</ul>

//     {/* <ul className={styles.messages__tabs}>
//         <li className={styles.messages__tab}  data-id="1" >Хочу обменять</li>
//         <li className={styles.messages__tab} data-id="2" >Хочу получить</li>
//         <li className={styles.messages__tab} data-id="3" >Адрес доставки</li>
//     </ul>
//     <div className={styles.messages__output}>
//         <section className={styles.messages__section_active}>section1</section>
//         <section className={styles.messages__section}>section2</section>
//         <section className={styles.messages__section}>section3</section>
//     </div>
//     <Tabs1 /> */}
//    // </>
    
  );
};

export default Messages;
