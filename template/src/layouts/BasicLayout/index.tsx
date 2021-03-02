/**
 *
 * BasicLayout
 * author yechangqing create by 20201209
 *
 */
import { Layout, Menu, Breadcrumb } from 'app/pages/Login/node_modules/antd';
import React, { useState, useMemo } from 'app/pages/HomePage/node_modules/react';
import packUpPng from 'assets/packUp.png';
import packDownPng from 'assets/packDown.png';
import logoPng from 'assets/logo.png';
import { useHistory, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { HeaderAvatar } from 'app/components/HeaderAvatar/Loadable';
import {
  SettingOutlined,
  BookOutlined,
  InteractionOutlined,
  MedicineBoxOutlined,
  TransactionOutlined,
  WalletOutlined,
  UnorderedListOutlined,
  DownOutlined,
  UpOutlined,
} from 'app/pages/Login/node_modules/@ant-design/icons';
import {
  LayoutContentWrapper,
  LogoWrapper,
  HeaderWrapper,
  DropMenuWrapper,
  MenuWrapper,
  ContentWrapper,
} from './style';

const { SubMenu } = Menu;

interface Props {
  children?: any;
  route?: any;
  location: any;
}
//
const menu = (
  <Menu
    style={{
      marginRight: '8px',
      minWidth: '300px',
      borderRadius: '2px',
      padding: 10,
    }}
  >
    <Menu.Item key="design">规范设计</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="nav1">导航栏位1</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="nav2">导航栏位2</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="nav3">导航栏位3</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="nav4">导航栏位4</Menu.Item>
  </Menu>
);

//上方菜单栏menu
const topMenu = [
  {
    name: '全景',
    key: '/fullView',
    sideBar: [
      {
        title: '系统管理',
        key: '0-0',
        icon: <SettingOutlined />,
        children: [
          {
            title: '系统列表',
            key: '0-1',
          },
          {
            title: '系统数据源',
            key: '0-2',
          },
          {
            title: '内部系统管理',
            key: '0-3',
          },
        ],
      },
      {
        title: '项目管理',
        key: '1-0',
        icon: <BookOutlined />,
        children: [
          {
            title: '测试',
            key: '1-1',
          },
        ],
      },
      {
        title: '数据产品',
        key: '2-0',
        icon: <InteractionOutlined />,
        children: [
          {
            title: '测试',
            key: '2-1',
          },
        ],
      },
      {
        title: '类目管理',
        key: '3-0',
        icon: <MedicineBoxOutlined />,
        children: [
          {
            title: '测试',
            key: '3-1',
          },
        ],
      },
      {
        title: '资产配置',
        key: '4-0',
        icon: <TransactionOutlined />,
        children: [
          {
            title: '测试',
            key: '4-1',
          },
        ],
      },
      {
        title: '信息补录',
        key: '/fullView/messageRecord',
        icon: <WalletOutlined />,
      },
    ],
  },
  { name: '地图', key: '/map' },
  { name: '安全', key: '/security' },
  { name: '治理', key: '/govern' },
  { name: '管理设置', key: '/managementSet' },
];

export function BasicLayout(props: Props) {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState<boolean>(false); //侧边栏是否展开
  const [sideBar, setSideBar] = useState<any>([]); //渲染的侧边栏数据
  const [sideBarMenu, setSideBarMenu] = useState<string>(''); //侧边栏
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const { location } = props;

  const setBreadCrumb = (route, breadcrumbNameMap = {}) => {
    route.forEach(item => {
      breadcrumbNameMap[item.key] = item.title || item.name;
      if (item.children) {
        setBreadCrumb(item.children, breadcrumbNameMap);
      }
      if (item.sideBar) {
        setBreadCrumb(item.sideBar, breadcrumbNameMap);
      }
    });
    return breadcrumbNameMap;
  };

  //缓存面包屑，避免切换路由时重新计算
  const breadcrumbNameMap = useMemo(() => {
    return setBreadCrumb(topMenu);
  }, [topMenu]);
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    // <Breadcrumb.Item key="home">
    //   <Link to="/">首页</Link>
    // </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  const changeMenu = menu => {
    localStorage.setItem('topMenu', menu.key);
    if (menu.sideBar) {
      setSideBar(menu.sideBar);
      setSideBarMenu(menu.name);
    } else {
      history.push(menu.key);
      setSideBar([]);
      setSideBarMenu('');
    }
  };

  //动态渲染侧边栏
  const createdSideBar = sideBarMenu => {
    const data = sideBarMenu.map((item: any, index) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key || item.title + index}
            title={item.title}
            icon={item.icon}
          >
            {createdSideBar(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={item.key || item.title + index}
            icon={item.icon}
            onClick={() => changeSideBarMenu(item.key)}
          >
            {item.title}
          </Menu.Item>
        );
      }
    });
    return data;
  };

  const changeSideBarMenu = key => {
    history.push(key);
  };
  return (
    <Layout>
      <HeaderWrapper>
        <LogoWrapper
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/')}
        >
          <img alt="logo" src={logoPng} />
        </LogoWrapper>
        {menu && (
          <DropMenuWrapper overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={e => e.preventDefault()}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              <UnorderedListOutlined style={{ marginRight: 8, width: 16 }} />
              资产管理
            </a>
          </DropMenuWrapper>
        )}

        <MenuWrapper
          mode="horizontal"
          defaultSelectedKeys={[localStorage.getItem('topMenu') || '']}
        >
          {topMenu.map(item => {
            return (
              <Menu.Item key={item.key} onClick={() => changeMenu(item)}>
                {item.name}
              </Menu.Item>
            );
          })}
        </MenuWrapper>
        <HeaderAvatar />
      </HeaderWrapper>
      <LayoutContentWrapper>
        {sideBar.length > 0 ? (
          <div className="sideBar">
            <div className="hamburger" style={{ width: collapsed ? 79 : 256 }}>
              <img
                src={collapsed ? packDownPng : packUpPng}
                alt=""
                onClick={toggleCollapsed}
              />{' '}
              {collapsed ? null : <span>{sideBarMenu}</span>}
            </div>
            <Menu
              mode="inline"
              style={{
                height: '100%',
                width: collapsed ? 79 : 256,
                overflowY: 'auto',
                overflowX: 'hidden',
              }}
              expandIcon={props => {
                if (props.children) {
                  if (props.isOpen) {
                    return <UpOutlined />;
                  } else {
                    return <DownOutlined />;
                  }
                }
              }}
              inlineCollapsed={collapsed}
            >
              {createdSideBar(sideBar)}
            </Menu>
          </div>
        ) : null}

        <ContentWrapper>
          <div className="bread">
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
          </div>
          <div className="content">{renderRoutes(props.route.routes)}</div>
        </ContentWrapper>
      </LayoutContentWrapper>
    </Layout>
  );
}
