import React from 'react';

import styles from './Projects.module.scss';
import img from '../../image/WhatsApp Image 2024-10-22 at 12.49.33 1.png';

import { withNamespaces } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import data from '../../data';

const Projects = ({ t }) => {
  return (
    <div className={styles.root} id="project">
      <h2>Bloglar</h2>
      <div className={styles.inner}>
        {data.map((items) => (
          <div key={items.link} className={styles.item}>
            <img className={styles.img} src={items.imgUrl} alt="" />
            <h3 className={styles.subtitle}>{items.title}</h3>
            <div className={styles.skills}>{items.ilkSoz}</div>
            <Link to={items.link} className={styles.demo}>
              Devam oku
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withNamespaces()(Projects);
