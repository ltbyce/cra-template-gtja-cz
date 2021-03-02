import styled from 'styled-components';
import { Breadcrumb, Layout, Menu, Dropdown } from 'app/pages/Login/node_modules/antd';

const { Header, Content, Footer } = Layout;

export const LayoutContentWrapper = styled.div`
  background: #fff;
  height: calc(100vh - 80px);
  display: flex;
  .sideBar {
    height: calc(100% - 80px);
    .hamburger {
      height: 80px;
      font-size: 18px;
      color: #556fcd;
      padding-left: 24px;
      padding-top: 30px;
      background: #ecf3ff;
      transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
      -webkit-transition: background 0.3s,
        width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
      img {
        cursor: pointer;
      }
    }
    .ant-menu {
      box-shadow: 0 0 20px 0 rgba(187, 187, 187, 0.1);
      border-radius: 0 0 10px 10px;
      background: #ecf3ff;
      .ant-menu-submenu,
      .ant-menu-item {
        font-size: 16px;
        font-family: 'PingFang-SC-Bold';
        color: #222222;
        .anticon {
          color: #1677fe;
        }
        .ant-menu-item-selected.ant-menu-item-only-child {
          color: #1677fe;
          background: white;
        }
        .ant-menu-item-only-child {
          color: #666666;
          font-size: 14px;
        }
        .ant-menu-item:hover {
          color: #1677fe;
        }
        .ant-menu-submenu-arrow {
          width: 20px;
        }
        .anticon.anticon-up,
        .anticon.anticon-down {
          margin-left: 84px;
          svg {
            color: #c7d6f4;
            font-size: 16px;
          }
        }
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 210px;
  min-width: 210px;
`;
export const HeaderWrapper = styled(Header)`
  display: flex;
  background-image: linear-gradient(127deg, #3f63de 16%, #559eff 100%);
  align-items: center;
  height: 80px;
  .ant-menu-horizontal {
    border-bottom: none;
  }
  .ant-menu {
    margin-left: auto;
    .ant-menu-item {
      color: rgba(255, 255, 255, 0.5);
      font-size: 18px;
    }
    .ant-menu-item-selected {
      color: rgba(255, 255, 255, 1);
      border-color: rgba(255, 255, 255, 0.5);
    }
    .ant-menu-item:hover {
      color: rgba(255, 255, 255, 1);
      border-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const MenuWrapper = styled(Menu)`
  background-color: rgba(0, 0, 0, 0);
`;

export const DropMenuWrapper = styled(Dropdown)`
  background-color: rgba(0, 0, 0, 0);
`;

export const ContentWrapper = styled(Content)`
  flex: 1 1 auto;
  overflow-y: auto;
  .bread {
    height: 50px;
    padding: 20px;
  }
`;
