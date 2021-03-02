var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
exports.__esModule = true;
exports.HeaderAvatar = void 0;
/**
 *
 * HeaderAvatar
 * anthor yechangqing create by 20200105
 *
 */
var react_1 = require('app/pages/HomePage/node_modules/react');
var macro_1 = require('app/pages/Login/node_modules/styled-components/macro');
var antd_1 = require('app/pages/Login/node_modules/antd');
var icons_1 = require('app/pages/Login/node_modules/@ant-design/icons');
var user_png_1 = require('assets/user.png');
exports.HeaderAvatar = react_1.memo(function (props) {
  var onMenuClick = function (_a) {
    var item = _a.item,
      key = _a.key,
      keyPath = _a.keyPath,
      domEvent = _a.domEvent;
  };
  var menuHeaderDropdown = react_1['default'].createElement(
    antd_1.Menu,
    {
      style: { marginRight: '8px', minWidth: '160px', marginTop: '22px' },
      selectedKeys: [],
      onClick: onMenuClick,
    },
    react_1['default'].createElement(
      antd_1.Menu.Item,
      { key: 'center' },
      react_1['default'].createElement(icons_1.UserOutlined, null),
      '\u4E2A\u4EBA\u4E2D\u5FC3',
    ),
    react_1['default'].createElement(
      antd_1.Menu.Item,
      { key: 'settings' },
      react_1['default'].createElement(icons_1.SettingOutlined, null),
      '\u4E2A\u4EBA\u8BBE\u7F6E',
    ),
    react_1['default'].createElement(antd_1.Menu.Divider, null),
    react_1['default'].createElement(
      antd_1.Menu.Item,
      { key: 'logout' },
      react_1['default'].createElement(icons_1.LogoutOutlined, null),
      '\u9000\u51FA\u767B\u5F55',
    ),
  );
  return react_1['default'].createElement(
    UserWrapper,
    null,
    react_1['default'].createElement(
      antd_1.Dropdown,
      { overlay: menuHeaderDropdown, placement: 'bottomCenter' },
      react_1['default'].createElement(
        'span',
        { className: 'action account' },
        react_1['default'].createElement(antd_1.Avatar, {
          size: 'small',
          className: 'avatar',
          src: user_png_1['default'],
          alt: 'avatar',
        }),
        react_1['default'].createElement(
          'span',
          { className: 'name anticon' },
          '管理员',
        ),
      ),
    ),
  );
});
var UserWrapper = macro_1['default'].span(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  overflow: hidden;\n  color: white;\n  .action {\n    height: 100%;\n    padding: 0 12px;\n    cursor: pointer;\n    transition: all 0.3s;\n  }\n  .ant-avatar {\n    margin-left: 24px;\n    margin-right: 8px;\n  }\n  .account {\n    .avatar {\n      /* margin: ~'calc((@{layout-header-height} - 24px) / 2)' 0; */\n      margin-right: 8px;\n      background: rgba(255, 255, 255, 0.85);\n    }\n  }\n",
      ],
      [
        "\n  overflow: hidden;\n  color: white;\n  .action {\n    height: 100%;\n    padding: 0 12px;\n    cursor: pointer;\n    transition: all 0.3s;\n  }\n  .ant-avatar {\n    margin-left: 24px;\n    margin-right: 8px;\n  }\n  .account {\n    .avatar {\n      /* margin: ~'calc((@{layout-header-height} - 24px) / 2)' 0; */\n      margin-right: 8px;\n      background: rgba(255, 255, 255, 0.85);\n    }\n  }\n",
      ],
    )),
);
var templateObject_1;
