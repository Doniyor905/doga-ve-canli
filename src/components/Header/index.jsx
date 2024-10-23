import React from 'react';
import { withNamespaces } from 'react-i18next';
import styles from './Header.module.scss';
import stickerLogo from '../../image/sticker.png';
import helloImg from '../../image/hello.png';
import heqaderImg from '../../image/Başlıksız 1.png';
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
          <h1 className='h1_1'>
            Merhaba <img src={helloImg} alt="" />
          </h1>
          <p className='h1_2'>
          "Doğa ve Canlı" blogumuza hoş geldiniz! Burada, doğanın sunduğu mucizeleri keşfederken, tüm canlıların birbirine olan derin bağlılığını ve hassas dengesini ele alacağız. Dünyamızı daha yakından tanımaya ve birlikte korumaya ne dersiniz?
          </p>
          
          <div className={styles.socials}>
            <a href="https://www.instagram.com/doniyor_web/">
              <img src={instagram} alt="" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Header);
