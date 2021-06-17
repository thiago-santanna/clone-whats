import React from 'react';
import ImageContato from '../../ImageContato'
import { BiDotsVerticalRounded, BiSearch } from 'react-icons/bi'


import styles from './headerMensagens.module.css'

const HeaderMensagens = () => {
    return (
        <>
          <div className={styles.bgHeader + ` flex items-center gap-2`}>
            <ImageContato imgFile="edson.png" />
            <div className="flex flex-col flex-1 ml-4">
                <span>Edson Oiao</span>
                <span>Visto por último hoje ás 16:13</span>
            </div>
            <div className="flex flex-row">
                <BiSearch size={22} color="#919191" />
                <BiDotsVerticalRounded className="ml-3" size={22} color="#919191" />
            </div>
          </div>  
        </>
    );
}

export default HeaderMensagens;
