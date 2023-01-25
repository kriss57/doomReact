import React from 'react';
import styles from './gretting.module.scss'

const Gretting = () => {
    return (
        <div className='Gretting'>
            <h1 className={styles.title}>Gretting<span> Bob</span></h1>
        </div>
    );
};

export default Gretting;