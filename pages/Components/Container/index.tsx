import React from 'react';
import Notificacao from './Notificacao';
import styles from './container.module.css'
import HeaderContact from './HeaderContact'
import Consulta from './Consulta';
import Mensagem from '../Mensagem';


const Container: React.FC = () => {
    return (
        <>
            <div className={styles.bgContainer + ` container mx-auto flex`}>
                <div className={styles.bgLeft + ` flex flex-col`}>
                    <HeaderContact />
                    <Notificacao />   
                    <Consulta />
                    <div className={styles.msgContatos +  ` flex-1`}>
                        <Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 2" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 3" statusMensagem="n" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 4" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 2" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 3" statusMensagem="n" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 4" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 2" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 3" statusMensagem="n" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 4" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 2" statusMensagem="v" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 3" statusMensagem="n" ultimaMensagem="Última mensagem..." />
                        <Mensagem nome="Thiago 4" statusMensagem="v" ultimaMensagem="Última mensagem..." />
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
