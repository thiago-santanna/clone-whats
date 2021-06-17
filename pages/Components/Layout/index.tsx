import React from 'react';
import styles from './layout.module.css'
import Container from '../Container'


type Props = {
    children: React.ReactNode
}

const Layout = ({ children }:Props) => {
    return (
        <>
            <div className={`flex flex-col min-h-screen`}>
                <div className={styles.bgTop + ` p-12`}></div>
                <div className={styles.bgContent + ` flex-1`}>
                    <Container/>
                </div>
            </div>           
        </>
    );
}

export default Layout;
