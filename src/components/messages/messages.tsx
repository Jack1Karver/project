import { ReactElement } from 'react';
import Container from '../container/container';
import Image from 'next/image';
import avatar from 'src/resources/img/avatar1.jpg';
import styles from './scss/messages.module.scss';
import moment from 'moment';
import Columns from '../columns/columns';

const Messages = () => {
  const messages: { name: string; avatar: ReactElement; text: string }[] = [];

  for (let i = 0; i < 10; i++) {
    messages.push({
      name: 'Admin Admin',
      avatar: <Image src={avatar} width={'32px'} height={'32px'} />,
      text: 'Lorem ipsum dolor sit amet, consectetur.',
    });
  }

  return (
    <>
      <h1>Messages</h1>
      <Container>
        <div className={styles.messages}>
          {messages.map(message => {
            return (
              <>
                <div className={styles.messages__message}>
                  <Columns
                    left={
                      <div className={styles.messages__content}>
                        <div className={styles.messages__avatar}>{message.avatar}</div>
                        <div className={styles.messages__text}>
                          <h4>{message.name}</h4>
                          <span>{message.text}</span>
                        </div>
                      </div>
                    }
                    right={<div className={styles.messgaes__date}>{moment().fromNow()}</div>}
                  />
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Messages;
