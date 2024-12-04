import React from 'react';
import styles from './Nav.module.scss';
import logoSvg from '../../image/Başlıksız 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

const Nav = ({ t }) => {
  const [languagePopup, setLanguagePopup] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const language = ['eng', 'fran', 'turk', 'isp'];

  const changeLanguage = (lng, i) => {
    i18n.changeLanguage(lng);
    setSelected(i);
    setLanguagePopup(false);
  };

  return (
    <div className={styles.nav__inner}>
      <a href="#!" className={styles.nav__logo}>
        <img src={logoSvg} alt="" />
      </a>
      <div className={styles.nav__block}>
        <div className={styles.language}>
          <div onClick={() => setLanguagePopup(!languagePopup)} className={styles.language__title}>
            {language[selected]}
            <FontAwesomeIcon icon={faCaretDown} className={styles['language__arrow']} />
          </div>
          <div
            className={
              languagePopup
                ? classNames(styles['language__dropdown'], styles['active'])
                : styles['language__dropdown']
            }>
            <ul>
              {language.map((lang, i) => (
                <li
                  className={
                    selected === i
                      ? classNames(styles['lang__li'], styles['active'])
                      : styles['lang__li']
                  }
                  key={i}
                  onClick={() => changeLanguage(lang, i)}>
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Nav);
