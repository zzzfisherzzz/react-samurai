import React from 'react';
import styles from './Post.module.css'
import avatar from "../../../../img/avatar.jpg";

const Post = (props) => {

    console.log(props.message)

    return (
        <div className={styles.item}>
            {/*<img src="https://banner2.kisspng.com/20180606/pyf/kisspng-computer-icons-avatar-clip-art-hipster-beard-5b17d1f2a0d238.9555915515282877306587.jpg" alt=""/>*/}
            <div className={styles.avatar}>
                <img src={avatar} alt=""/>
            </div>
            { props.message }
            <div>
                <span>like</span>
            </div>
        </div>
    )

}

export default Post