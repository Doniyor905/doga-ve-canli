import React from 'react';
import styles from './Styles.module.scss';
import img2 from '../image/111.png';
import { withNamespaces } from 'react-i18next';

const Doga = ({ t }) => {
  window.scrollTo(0, 0);

  return (
    <div className={styles.rootHome}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.header}>
            <img className={styles.img} src={img2} alt="" />
            <h3 className={styles.title}>{t('Blog2 Title')}</h3>
            <p className={styles.text}>{t('Blog2 Texts')}</p>
            <p className={styles.link}>
              {t('Other')}
              <a href="https://dergipark.org.tr/tr/pub/afet/issue/73264/1086418">
                https://dergipark.org.tr/tr/pub/afet/issue/73264/1086418
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Doga);
