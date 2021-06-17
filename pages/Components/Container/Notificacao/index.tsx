import React from 'react';
import { IoIosNotificationsOff } from 'react-icons/io'
import { RiArrowDropRightLine } from 'react-icons/ri'

import styles from './notificacao.module.css'

const Notificacao = () => {
    return (
        <>
            <div className={styles.bgNotificacao + ` flex flex-row p-4`}>
                <div className={styles.bgSino + ` flex flex-1 items-center justify-center`}>
                    <IoIosNotificationsOff size={20} color="#9de1fe"/>
                </div>
                
                <div className=" flex flex-col gap-1 text-xs ml-6">
                    <span className="flex">Receba notificações de novas mensagens</span>
                    <div className="flex items-center justify-center gap-1">
                        <a href="#">Ativar notificações na área de trabalho</a>
                        <RiArrowDropRightLine />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notificacao;
