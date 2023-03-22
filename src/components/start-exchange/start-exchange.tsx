import { ReactElement, useMemo, useState } from 'react';
import Container from '../container/container';

import styles from './scss/start-exchange.module.scss';

import React, { useEffect } from 'react';

import Exchange from '../exchange/exchange';
import Delivery from '../delivery/delivery';
import Receiving from '../receiving/receiving';

import CheckboxStore from '../../stores/checkbox.store';
import { observer } from 'mobx-react';

interface TabType {
  type: string;
  title: string;
  content: ReactElement;
}

const Messages = observer(() => {
  const [activeTab, setActiveTab] = useState<TabType>();

  const checkboxStore = useMemo(() => new CheckboxStore(), []);

  const tabs = [
    {
      type: 'exchange',
      title: 'Хочу обменять',
      content: <Exchange setActive={showMe} />,
    },
    {
      type: 'receiving',
      title: 'Хочу получить',
      content: <Receiving setActive={showMe} checkedStore={checkboxStore} />,
    },
    {
      type: 'delivery',
      title: 'Адрес доставки',
      content: <Delivery setActive={showMe} checkedStore={checkboxStore} />,
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
          className={`${styles['start-exchange__tab']} ${
            activeTab?.type === tab.type ? styles['start-exchange__tab--active'] : ''
          }`}
          onClick={() => showMe(key)}
        >
          {tab.title}
        </li>
      );
    });
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Бланк обмена</h1>
      <Container>
        <ul className={styles['start-exchange__tabs']}>{getTabs()}</ul>
      </Container>
      <Container>
        <div className={styles.messages__output}>{activeTab?.content}</div>
      </Container>
    </>
  );
});

export default Messages;
