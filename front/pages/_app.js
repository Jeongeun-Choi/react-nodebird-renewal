import React from "react";
import PropTypes from "prop-types";
import Head from "next/head"; //head 수정!!
import "antd/dist/antd.css"; //antd 사용
import withReduxSaga from "next-redux-saga";
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    // next-redux-wrapper@6에선 Provider로 감싸지 않아도 된다.
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
  Component: PropTypes.elementType.isRequired
};
export default wrapper.withRedux(withReduxSaga(NodeBird));
