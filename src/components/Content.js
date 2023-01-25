import React from 'react';
import styles from './content.module.scss'

const Content = () => {
    return (
        <div className='flex_fill container p-20'>
            <h1 className='mb-20'>Redécouvrez Doom</h1>
            <div className={`${styles.cardContainer} card p-20`}>
                <div className={styles.grid}>
                    <div className={styles.element}>ELEMENT</div>
                    <div className={styles.element}>ELEMENT</div>
                    <div className={styles.element}>ELEMENT</div>
                    <div className={styles.element}>ELEMENT</div>
                    <div className={styles.element}>ELEMENT</div>
                    <div className={styles.element}>ELEMENT</div>
                </div>
            </div>


        </div>
    );
};

export default Content;