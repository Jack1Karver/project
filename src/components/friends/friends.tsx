import Block from '../block/block';
import Container from '../container/container';
import avatar from 'src/resources/img/avatar1.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';
import styles from './scss/friends.module.scss';
import Button from '../button/button';

const Friends = () => {
  const friends: { name: string; avatar: ReactElement }[] = [];

  for (let i = 0; i < 10; i++) {
    friends.push({
      name: 'Admin Admin',
      avatar: <Image src={avatar} width={'128px'} height={'128px'} />,
    });
  }

  return (
    <>
      <h1>Friends</h1>
      <Container>
        <div className={styles.friends}>
          {friends.map(friend => {
            return (
              <>z
                <div className={styles.friends__friend}>
                  <div className={styles.friends__avatar}>
                    {friend.avatar}
                    <h2>
                      <a>{friend.name}</a>
                    </h2>
                  </div>
                  <div className={styles.friends__buttons}>
                    <Button content={'Remove from friends'} size={'md'} mod={'empty'} />
                    <Button content={'Open dialog'} size={'md'} mod={'empty'} />
                    <Button content={'Change category'} size={'md'} mod={'empty'} />
                    <Button content={'Watch friends'} size={'md'} mod={'empty'} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Friends;
