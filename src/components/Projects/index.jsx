import React from 'react';

import styles from './Projects.module.scss';
import img1 from '../../image/WhatsApp Image 2024-10-22 at 12.49.33 1.png';
import img2 from '../../image/111.png';
import img3 from '../../image/1.jpg';
import img4 from '../../image/2.jpg';

import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

const Projects = ({ t }) => {
  return (
    <div className={styles.root} id="project">
      <h2>{t('Blog Title')}</h2>
      <div className={styles.inner}>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img1} alt="" />
          </div>
          <h3 className={styles.subtitle}>{t('Blog1 Title')}</h3>

          <Link to="/dogs" className={styles.demo}>
            {t('Button text')}
          </Link>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img2} alt="" />
          </div>
          <h3 className={styles.subtitle}>{t('Blog2 Title')}</h3>

          <Link to="/doga" className={styles.demo}>
            {t('Button text')}
          </Link>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img3} alt="" />
          </div>
          <h3 className={styles.subtitle}>{t('Blog3 Title')}</h3>

          <Link to="/cig" className={styles.demo}>
            {t('Button text')}
          </Link>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img4} alt="" />
          </div>
          <h3 className={styles.subtitle}>{t('Blog4 Title')}</h3>

          <Link to="/deprem" className={styles.demo}>
            {t('Button text')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Projects);
