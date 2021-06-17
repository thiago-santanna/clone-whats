import React from 'react';
import ImageContato from '../../ImageContato'
import { BiDotsVerticalRounded, BiCommentDetail, BiLoaderCircle } from 'react-icons/bi'


import styles from './headerContato.module.css'


const HeaderContact = () => {
    return (
        <>
            <div className={styles.bgHeader + ` flex items-center gap-2 p-2`}>
                <div className="flex items-center flex-1">
                    <ImageContato />
                </div>
                <div className=" flex flex-row flex-grow items-center justify-end">
                    <BiLoaderCircle size={22} color="#919191" />
                    <BiCommentDetail className="ml-4" size={22} color="#919191" />
                    <BiDotsVerticalRounded className="ml-2" size={22} color="#919191" />
                </div>
            </div>
        </>
    );
}

export default HeaderContact;
