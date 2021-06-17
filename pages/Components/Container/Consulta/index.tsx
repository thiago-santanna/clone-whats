import React from 'react';
import { FiSearch } from 'react-icons/fi'

import styles from './consulta.module.css'

const Consulta = () => {
    return (
        <>
            <div className={styles.bgConsulta}>
                <div className="bg-white flex flex-row gap-2 p-2 rounded-3xl">
                    <FiSearch />
                    <input className="flex-1 text-xs font-thin outline-none" type="text" placeholder="Pesquisar ou comercar uma nova conversa" />
                </div>
            </div>            
        </>
    );
}

export default Consulta;
