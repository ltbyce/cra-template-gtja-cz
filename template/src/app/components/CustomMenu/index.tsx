/**
 *
 * CustomMenu
 * 自定义Antd Menu渲染
 * anthor yechangqing create by 20200105
 */
import React, { memo } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';

const { SubMenu } = Menu;

interface MenuProps {
  title: string;
  path?: string;
  key: string;
  children?: Array<MenuProps>;
}
interface Props {
  datasource: Array<MenuProps>;
  [propsName: string]: any;
}

export const CustomMenu = memo((props: Props) => {
  const { datasource } = props;
  const MenuProps = Object.assign({}, { ...props }, { datasource: null });
  // 递归渲染导航栏
  const RenderMenu = data => {
    if (data.children && data.children.length)
      return (
        <SubMenu
          popupClassName="custom-submenu-styled"
          key={data.key}
          title={data.title}
        >
          {data.children.map(item => RenderMenu(item))}
        </SubMenu>
      );
    return (
      <Menu.Item title={data.title} key={data.key}>
        {data.title}
      </Menu.Item>
    );
  };
  return (
    <MenuWrapper {...MenuProps}>
      {datasource.map((item, index) => RenderMenu(item))}
    </MenuWrapper>
  );
});

const MenuWrapper = styled(Menu)`
  .ant-menu-horizontal {
    border-bottom: none;
  }
`;
