import Columns from '../columns/columns';
import styles from './scss/block.module.scss';
import Image from 'next/image';

import Avatar from '../../resources/img/avatar1.jpg';
import image from '../../resources/img/image.jpg';
import Button from '../button/button';
import moment from 'moment';
import Container from '../container/container';

const ProfileBlock = () => {
  const profileStats = [
    {
      label: 'Birth date',
      value: moment('28-02-2001', 'DD-MM-YYYY').format('Do MMM YYYY'),
    },
    {
      label: 'Workplace',
      value: 'PSUTI',
    },
    {
      label: 'Place of study',
      value: 'PSUTI',
    },
  ];

  return (
    <>
      <div className={styles.profile}>
        <Container>
          <div className={styles.profile__block}>
            <img className={styles.avatar} src={Avatar.src} width={'256px'} height={'256px'} />
            <Button mod={'blue'} size={'wide'} content={'Change Photo'} />
          </div>
        </Container>
        <div>
          <div className={styles.profile__block}>
            <div className={styles.profile__description}>
              <h2>Admin Admin</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </span>
              <div className={styles.profile__tabs}>
                <Columns
                  left={profileStats.map((stat, key) => {
                    return (
                      <div
                        className={`${styles.profile__stat} ${styles['profile__stat--grey']}`}
                      >{`${stat.label}:`}</div>
                    );
                  })}
                  right={profileStats.map((stat, key) => {
                    return <div className={styles.profile__stat}>{`${stat.value}`}</div>;
                  })}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.profile__block} ${styles.profile__news}`}>
            <h4>Records</h4>
            <div className={`${styles.profile__content}  ${styles['profile__content--profile']}`}>
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
            <div className={`${styles.profile__content}  ${styles['profile__content--profile']}`}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBlock;
