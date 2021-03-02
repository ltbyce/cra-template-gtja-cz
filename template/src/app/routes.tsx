import React from 'app/pages/HomePage/node_modules/react';
import { Redirect, Route, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { convertPath } from 'utils/tool';
import { BasicLayout } from 'layouts/BasicLayout';
import { NotFoundPage } from 'app/components/NotFoundPage';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { Login } from 'app/pages/Login';
import { Demo1 } from 'app/pages/Demo1/Loadable';
import { FullView } from 'app/pages/Demo1';
import { MessageRecord } from 'app/pages/Demo1';
import { Govern } from 'app/pages/Demo1';
import { Map } from 'app/pages/Demo1';
import { ManagementSet } from 'app/pages/Demo1';
import { Security } from 'app/pages/Demo1';
interface Props {
  route: {
    routes: { [propName: string]: any }[];
  };
}

const renderChildren = (props: Props) => renderRoutes(props.route.routes);

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

export const routes = [
  {
    path: '/404',
    name: '404',
    component: NotFoundPage,
  },
  {
    path: '/login',
    exact: true,
    name: '登录',
    component: Login,
  },
  /* ↓↓↓ 需要layout布局的页面路由在这里配置 */
  {
    path: '/',
    component: BasicLayout,
    name: '首页',
    render: props => [
      <BasicLayout {...props} />,
      props.location.pathname === convertPath('/') && <Redirect to={'/home'} />,
    ],
    routes: [
      {
        path: '/home',
        name: '首页',
        exact: true,
        component: HomePage,
      },
      {
        path: '/fullView',
        name: '全景',
        exact: true,
        component: FullView,
      },
      {
        path: '/map',
        name: '地图',
        exact: true,
        component: Map,
      },
      {
        path: '/security',
        name: '安全',
        exact: true,
        component: Security,
      },
      {
        path: '/govern',
        name: '治理',
        exact: true,
        component: Govern,
      },
      {
        path: '/managementSet',
        name: '管理设置',
        exact: true,
        component: ManagementSet,
      },
      {
        path: '/fullView/messageRecord',
        name: '信息补录',
        exact: true,
        component: MessageRecord,
      },
      {
        path: '/*',
        name: '示例1',
        exact: true,
        component: FullView,
      },
    ],
  },
];
