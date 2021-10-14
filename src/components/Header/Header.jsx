import React from "react";
import { Layout, Row, Menu } from "antd";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Layout.Header>
            <Row justify="start">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    disabledOverflow={true}
                >
                    <Menu.Item key={1}>
                        <NavLink to="/">Matches</NavLink>
                    </Menu.Item>
                    
                    <Menu.Item key={2}>
                        <NavLink to="/json">Get Json</NavLink>
                    </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default Header;
