import React from 'react';
import Image from 'next/image'

type ImageContatoProps = { 
    imgFile?: string
}

const ImageContato = ({imgFile = "placeholder.png"}: ImageContatoProps) => {
    return (
        <>
           <Image className="rounded-full" src={`/${imgFile}`} alt="usuario" width={30} height={30} /> 
        </>
    );
}

export default ImageContato;
