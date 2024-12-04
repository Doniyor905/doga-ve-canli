import React from 'react';
import { withNamespaces } from 'react-i18next';
import styles from './Header.module.scss';
import stickerLogo from '../../image/sticker.png';
import helloImg from '../../image/hello.png';
import tiktokImg from '../../image/tiktok.svg';
import instagram from '../../image/instagram.svg';
import telegram from '../../image/telegram.svg';
import github from '../../image/github.svg';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ t }) => {
  return (
    <div className={styles.root} id="home">
      <div className={styles.header__wrapper}>
        <div className={styles.content}>
          <h1 className="h1_1">
            {t('Header Title')} <img src={helloImg} alt="" />
          </h1>
          <p className="h1_2">{t('Header Subtitle')}</p>

          <div className={styles.socials}>
            <a href="https://www.instagram.com/omertrhhn?igsh=aDZyMWJlb3RuODFw">
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Header);
