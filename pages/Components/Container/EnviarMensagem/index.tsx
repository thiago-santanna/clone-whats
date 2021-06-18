import React from 'react';
import { FiSmile, FiPaperclip, FiMic } from 'react-icons/fi'

const EnviarMensagem = () => {
    return (
        <>
            <div className="flex items-center gap-3 py-3 bg-gray-100">
                <FiSmile className="ml-3" size={22} color="#919191" />
                <FiPaperclip size={22} color="#919191" />
                <div className="flex flex-grow bg-white p-1 rounded-3xl">
                    <input className="flex-1" type="text" />
                </div>
                <FiMic className="mr-3" size={22} color="#919191" />
            </div>
        </>
    );
}

export default EnviarMensagem;
