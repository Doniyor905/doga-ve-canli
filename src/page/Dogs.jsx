import React from 'react';
import styles from './Styles.module.scss';
import img1 from '../image/WhatsApp Image 2024-10-22 at 12.49.33 1.png';
import { withNamespaces } from 'react-i18next';

const Dogs = ({ t }) => {
  window.scrollTo(0, 0);

  return (
    <div className={styles.rootHome}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.header}>
            <img className={styles.img} src={img1} alt="" />
            <h3 className={styles.title}>{t('Blog1 Title')}</h3>
            <p className={styles.text}>{t('Blog1 Texts')}</p>
            <p className={styles.link}>
              {t('Other')}
              <a href="https://www.markamama.com.tr/hayvan-sevgisi-nedir">
                https://www.markamama.com.tr/hayvan-sevgisi-nedir
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Dogs);
