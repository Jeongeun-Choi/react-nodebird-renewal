import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';   //head 수정!!
import 'antd/dist/antd.css';    //antd 사용

const NodeBird = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}
export default NodeBird;