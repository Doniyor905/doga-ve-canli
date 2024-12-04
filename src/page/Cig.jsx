import React from 'react';
import styles from './Styles.module.scss';
import img3 from '../image/1.jpg';
import { withNamespaces } from 'react-i18next';

const Cig = ({ t }) => {
  window.scrollTo(0, 0);
  return (
    <div className={styles.rootHome}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.header}>
            <img className={styles.img} src={img3} alt="" />
            <h3 className={styles.title}>{t('Blog3 Title')}</h3>
            <p className={styles.text}>{t('Blog3 Texts')}</p>
            <p className={styles.link}>{t('Blog3 links')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Cig);
