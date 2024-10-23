import React from 'react'
import styles from "./Pages.module.scss"
import data from "../data"
import { useParams } from 'react-router-dom'
import '../App.scss';
import Header from '../components/Header';
import img from "../image/WhatsApp Image 2024-10-22 at 12.49.33 1.png"


const Index = () => {
    const {type} = useParams()
    const item = data.find(items => items.link === type);
  return (
    <div className={styles.rootHome}>
        <div className={styles.wrapper}>
           <div className='container'>
            <div className={styles.header}><img className={styles.img} src={img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.skills}</p>
            <p>{item.altSoz} <a href={item.altSozLink}>{item.altSozLink}</a></p>
            
            </div>
           </div>
        </div>
    
        
    </div>
  )
}

export default Index