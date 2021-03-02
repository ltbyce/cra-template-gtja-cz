/**
 *
 * HeaderAvatar
 * anthor yechangqing create by 20200105
 *
 */
import React, { memo } from 'app/pages/HomePage/node_modules/react';
import styled from 'app/pages/Login/node_modules/styled-components/macro';
import { Avatar, Dropdown, Menu } from 'app/pages/Login/node_modules/antd';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from 'app/pages/Login/node_modules/@ant-design/icons';

import userPng from 'assets/user.png';
import logoutSvg from 'assets/logout.svg';

interface Props {}

export const HeaderAvatar = memo((props: Props) => {
  const onMenuClick = ({ item, key, keyPath, domEvent }) => {};
  const menuHeaderDropdown = (
    <Menu
      style={{ marginRight: '8px', minWidth: '160px', marginTop: '22px' }}
      selectedKeys={[]}
      onClick={onMenuClick}
    >
      <Menu.Item key="center">
        <UserOutlined />
        个人中心
      </Menu.Item>
      <Menu.Item key="settings">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <UserWrapper>
      <Dropdown overlay={menuHeaderDropdown} placement="bottomCenter">
        <span className="action account">
          <Avatar size="small" className="avatar" src={userPng} alt="avatar" />
          <span className="name anticon">{'管理员'}</span>
        </span>
      </Dropdown>
    </UserWrapper>
  );
});

const UserWrapper = styled.span`
  overflow: hidden;
  color: white;
  .action {
    height: 100%;
    padding: 0 12px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .ant-avatar {
    margin-left: 24px;
    margin-right: 8px;
  }
  .account {
    .avatar {
      /* margin: ~'calc((@{layout-header-height} - 24px) / 2)' 0; */
      margin-right: 8px;
      background: rgba(255, 255, 255, 0.85);
    }
  }
`;
