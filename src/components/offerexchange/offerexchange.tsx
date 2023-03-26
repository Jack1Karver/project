import React from "react";
import Container from "../container/container";
import styles from './scss/offerexchange.module.scss';


const offerexchange = () => {
    return (<>
        <Container>
            <>
           <div> 
                <h4 className={styles.h}>Полное совпадение</h4><br></br>
                <div className={styles.bblock}></div><br></br>

                <h4 className={styles.h}>Частичное совпадение</h4><br></br>
                <div className={styles.bblock}></div><br></br>

                <h4 className={styles.h}>Другие интересные предложения</h4><br></br>
                <div className={styles.bblock}></div>
            </div>
            </>
        </Container>
    
    
    </>);

    //     <Container>
            
            
    //     <div> 
    //         <div className={styles.bblock}>Полное совпадение</div>
    //         <div className={styles.bblock}>Частичное совпадение</div>
    //         <div className={styles.bblock}>Другие интересные предложения</div>
    //     </div>

    
   
    // </Container>
};

export default offerexchange;