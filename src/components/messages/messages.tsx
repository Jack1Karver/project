import { ReactElement, useState } from 'react';
import Container from '../container/container';
import Image from 'next/image';
import avatar from 'src/resources/img/avatar1.jpg';
import styles from './scss/messages.module.scss';
import moment from 'moment';
import Columns from '../columns/columns';
import { action } from 'mobx';
import React, { useRef, useEffect} from 'react';
// import Tab, { Container } from 'react-bootstrap/lib/Tab'


const Messages = () => {
 // const [tabElemennt, tabActiveElemennt] = useState(null)
//let showElem = React.
//   function showMe(i){
//     tabActiveElemennt(i)
//   }

// function showMe(){
//   let tabs = document.getElementsByClassName('__tab');
//   let sections = document.getElementsByClassName('__section');
  
//   for (let i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener('click', tabclick) 
//     console.log(tabs[i])
//   }

   //function tabclick() {
  //   let tab = event.target;
  //   let tabId = tab.dataset.id;

  //   for (let k = 0; k < tabs.length; k++) {
  //       tabs[k].classList.remove('active');
  //       tabs[tabId - 1].classList.add('active');

  //       sections[k].classList.remove('active');
  //       sections[tabId - 1].classList.add('active');

  //   }
  // }
//}

  return (
    <>
    
    <ul className={styles.messages__tabs}>
        <li className={styles.messages__tab}  data-id="1" >tab1</li>
        <li className={styles.messages__tab} data-id="2" >tab2</li>
        <li className={styles.messages__tab} data-id="3" >tab3</li>
    </ul>
    <div className={styles.messages__output}>
        <section className={styles.messages__section_active}>section1</section>
        <section className={styles.messages__section}>section2</section>
        <section className={styles.messages__section}>section3</section>
    </div>
    </>
    
  );
};

export default Messages;
