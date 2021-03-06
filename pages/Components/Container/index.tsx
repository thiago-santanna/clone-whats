import React from 'react';
import { Element } from 'react-scroll'
import Notificacao from './Notificacao';
import styles from './container.module.css'
import HeaderContact from './HeaderContact'
import Consulta from './Consulta';
import Mensagem from '../Mensagem';
import HeaderMensagens from './HeaderMensagens';
import MensagemContainer from './MensagemContainer';
import EnviarMensagem from './EnviarMensagem';


const Container: React.FC = () => {
    return (
        <>
            <div className={styles.bgContainer + ` container mx-auto px-28 flex`}>
                <div className={styles.bgLeft + ` flex flex-col`}>
                    <HeaderContact />
                    <Notificacao />   
                    <Consulta />
                    <div className={styles.msgContatos +  ` flex-1`}>
                        <Element name="listMensagens" className="element" id="containerElement" style={{
                        position: 'relative',
                        height: '29rem',
                        overflowY: 'scroll'
                        }}>
                            <Element name="lista1"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista2"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista3"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista4"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista5"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista6"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista7"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista8"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista9"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista10"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista11"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista12"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista13"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista14"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista15"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista16"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista17"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista18"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista19"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                            <Element name="lista20"><Mensagem nome="Thiago 1" statusMensagem="v" ultimaMensagem="Última mensagem..." /></Element>
                        </Element>
                    </div>
                </div>

                <div className={styles.bgRight + ` flex flex-col`}>
                    <HeaderMensagens />
                    <div className={styles.bgMensagemContainer + ` flex-1`}>
                        <MensagemContainer />
                    </div>
                    <EnviarMensagem />
                </div>                
            </div>        
        </>
    );
}

export default Container;
