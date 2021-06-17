import React from 'react';
import ImageContato from '../ImageContato'

import styles from './mensagem.module.css'

type mensagemProps  = {
    imagem?: string,
    nome: string,
    statusMensagem: string,
    ultimaMensagem: string,
}

const Mensagem = ({imagem, nome, statusMensagem, ultimaMensagem}: mensagemProps) => {
    return (
        <>
            <div className={styles.Mensagem +  ` flex items-center gap-1 bg-white p-3`}>
                <div className="ml-1">
                    <ImageContato imgFile={imagem} />
                </div>
                <div className="flex-1 items-center">
                    <span className="font-semibold text-sm">{nome}</span>
                    <div className="flex gap-1 items-center text-gray-400">
                        <span>{statusMensagem}</span>
                        <span className="font-thin text-sm">{ultimaMensagem}</span>
                    </div>
                </div>
                <span className="mr-3 font-thin text-xs text-gray-400">{`14:21`}</span>
            </div>            
        </>
    );
}

export default Mensagem;
