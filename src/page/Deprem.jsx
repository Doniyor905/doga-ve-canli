import React from 'react';
import styles from './Styles.module.scss';
import img4 from '../image/2.jpg';
import { withNamespaces } from 'react-i18next';
const Deprem = ({ t }) => {
  window.scrollTo(0, 0);

  return (
    <div className={styles.rootHome}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.header}>
            <img className={styles.img} src={img4} alt="" />
            <h3 className={styles.title}>{t('Blog4 Title')}</h3>
            <p className={styles.text}>{t('Blog4 Texts')}</p>
            <p className={styles.link}>{t('Blog4 link')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Deprem);
