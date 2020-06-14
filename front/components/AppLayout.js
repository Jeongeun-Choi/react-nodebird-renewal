import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

//반응형을 만들땐 모바일 기준으로 만들고 태블릿, 데스크탑 순서로 디자인한다.

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* gutter: col 사이의 간격 */}
      <Row gutter={8}>
        {/* 
                    xs: 모바일
                    sm: 태블릿
                    md: 작은 데스크탑
                    lg, xl : 대화면
                 */}
        {/* 24등분 중 얼마나 차지 할 것인지 */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* 보안상의 문제로 새창으로 띄울때 반드시 rel="noreferrer noopener" 적어준다! */}
          <a
            href="https://github.com/Jeongeun-Choi"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by Jeong
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;
