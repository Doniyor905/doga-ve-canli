import React from 'react';
import styles from './Pages.module.scss';
import data from '../data';
import { useParams } from 'react-router-dom';
import '../App.scss';
import Header from '../components/Header';

const Index = () => {
  const { type } = useParams();
  const item = data.find((items) => items.link === type);
  return (
    <div className={styles.rootHome}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.header}>
            <img className={styles.img} src={item.imgUrl} alt="" />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.skills}</p>
            <p className={styles.link}>
              {item.altSoz} <a href={item.altSozLink}>{item.altSozLink}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
