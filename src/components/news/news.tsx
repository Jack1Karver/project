import Block from '../block/block';
import Container from '../container/container';
import styles from '../block/scss/block.module.scss';
import Image from 'next/image';

import Avatar from '../../resources/img/avatar1.jpg';
import image from '../../resources/img/image.jpg';

const News = () => {
  return (
    <div>
      <h1>News</h1>
      <Container>
        <div className={styles.profile__content}>
          <div className={styles.profile__rechead}>
            <Image className={styles.avatar} src={Avatar} width={'32px'} height={'32px'} />
            <span className={styles.profile__name}>{'Admin Admin'}</span>
          </div>
          <br />
          <span className={styles.profile__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </span>
          <Image src={image} />
        </div>
      </Container>
      <Container>
        <div className={styles.profile__content}>
          <div className={styles.profile__rechead}>
            <Image className={styles.avatar} src={Avatar} width={'32px'} height={'32px'} />
            <span className={styles.profile__name}>{'Admin Admin'}</span>
          </div>
          <br />
          <span className={styles.profile__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </span>
          <Image src={image} />
        </div>
      </Container>
    </div>
  );
};

export default News;
