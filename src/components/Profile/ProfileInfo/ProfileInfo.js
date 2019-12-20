import React from 'react';
import styles from './ProfileInfo.module.css'
import banner from "../../../img/banner.jpeg";

const ProfileInfo = () => {

    return (
        <div>
            <div>
                {/*<img src="https://wallpaperplay.com/walls/full/b/c/7/2399.jpg" alt=""/>*/}
                <img src={banner} alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                {/*<img src="https://i.pinimg.com/originals/e3/79/fe/e379fe0bff01e9691e46935d20cfb8b9.jpg" alt=""/>*/}
                ava + description
            </div>
        </div>
    )

}

export default ProfileInfo