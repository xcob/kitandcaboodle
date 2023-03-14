import React, { useEffect } from "react";
import styles from "./index.module.css";

function HomePage() {
    useEffect(function mount() {
        document.body.style.margin = '0px';
        document.body.style.width = '100vw'
    })
    return ( 
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img
                    src='/k+c-smile.png'
                    alt='kit and caboodle smile mark'
                    width='365px'
                    />
                </div>
                <div className={styles.right}>
                    <img
                        src='/k+c-logo.png'
                        alt='kit and caboodle main logo'
                        width='400px'
                    />
                    <h2 className={styles.title}>
                        sparks of joy for every occasion
                    </h2>
                    <br />
                    <p>
                        Kit + Caboodle specializes in holiday and party decorating kits that are thoughtfully curated to make any event extra special!
                    </p>
                    <p>
                        Interested in custom party decorating?<br />
                        <a href="mailto:kennedy@kitandcaboodle.com"><strong>Let's Chat!</strong></a>
                    </p>
                    <br />
                    <p>
                        Full website experience coming soon!
                    </p>
                </div>
            </div>
        </div>
        
        
        )
    
   
  }
  
  export default HomePage