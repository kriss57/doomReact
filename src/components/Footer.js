import React from 'react';
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={`${styles.footer} d_flex align_items justify_content p-20`}>
            <p>Copyright © 2023 DoomReact Inc.</p>
        </footer>
    );
};

export default Footer;