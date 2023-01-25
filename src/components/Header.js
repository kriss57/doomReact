import React from 'react';
import styles from './header.module.scss'
import logo from '@/assets/images/logo.png'

const Header = () => {
    return (
        <header className={`${styles.header} d_flex flex_row .align_items`}>
            <i class="fa-solid fa-bars mr-10"></i>
            <div className='flex_fill'>
                <img src={logo} alt='logo doom' />
            </div>
            <ul>
                <button className='mr-10 btn btn-primary'>
                    <i class="fa-solid fa-compact-disc mr-10"></i>
                    <span>Disc</span>
                </button>
                <button className='btn btn-reverse-primary'>
                    <i class="fa-regular fa-circle-play mr-10"></i>
                    <span>Connexion</span>
                </button>
            </ul>

        </header>
    );
};

export default Header;