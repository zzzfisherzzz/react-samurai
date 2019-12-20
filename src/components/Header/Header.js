import React from 'react';
import styles from './Header.module.css'
import avatar from "../../img/javascript.png";

const Header = () => {

    return (
        <header className={styles.header}>
            {/*<img src="https://calendarmedia.blob.core.windows.net/assets/3867334a-8bcc-4f44-9684-3fe63020ec24.png" alt=""/>*/}
            <img src={avatar} alt=""/>
        </header>
    )

}

export default Header