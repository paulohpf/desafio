import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Layout } from 'antd';
import "./Sider.scss";

const { Sider } = Layout;

class SiderComponent extends Component {
    render() {
        return (
            <Sider
                className="sider"
                theme="light">
                <Menu
                    mode="inline"
                >
                    <div className="logo" />
                    <Menu.Item key="painel" className="painel">
                        Painel
                    </Menu.Item>
                    <Menu.Item key="configuracoes" className="configuracoes">
                        Configurações
                    </Menu.Item>
                    <Menu.Item key="suporte" className="suporte">
                        Suporte
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default SiderComponent;