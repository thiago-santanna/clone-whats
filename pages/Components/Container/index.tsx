import React from 'react';
import Notificacao from './Notificacao';
import styles from './container.module.css'
import HeaderContact from './HeaderContact'
import Consulta from './Consulta';


const Container: React.FC = () => {
    return (
        <>
            <div className={styles.bgContainer + ` container mx-auto flex`}>
                <div className={styles.bgLeft + ` flex flex-col`}>
                    <HeaderContact />
                    <Notificacao />   
                    <Consulta />
                    <div className="flex-1">
                        <h1>Lista Mensagens</h1>
                    </div>
                </div>

                <div className={styles.bgRight}>
                    <h1>lateral 2 onde ficará as mensagens</h1>
                </div>                
            </div>        
        </>
    );
}

export default Container;
