import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Form, Input, Button, Checkbox, Tabs, Alert } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { selectLogin } from './selectors';
import { loginSaga } from './saga';
import { reducer, sliceKey } from './slice';
interface Props {}
export const Login = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = useSelector(selectLogin);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
  };
  const [messageState, setmessageState] = useState('');
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    const { account, password } = errorInfo.values;
    if (!account || !password) {
      setmessageState('请输入用户名或密码！');
    }
  };

  // eslint-disable-next-line
  const handleSubmit = async values => {
    setmessageState('');
  };

  return (
    <>
      <Helmet>
        <title>登录</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Div>
        <Logo></Logo>
        <Container>
          <Main>
            <H1>DPLink智能数据开发运营平台</H1>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="账户密码登录" key="1">
                <Panel>
                  <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: false }}
                    onFinish={handleSubmit}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="用户名"
                      name="account"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input placeholder="请输入用户名" autoComplete="off" />
                    </Form.Item>

                    <Form.Item
                      label="密码"
                      name="password"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input.Password
                        placeholder="请输入密码"
                        iconRender={visible =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>
                    <Error
                      message={messageState}
                      type="error"
                      showIcon
                      style={{ display: messageState ? 'block' : 'none' }}
                    />
                    <Flexdiv>
                      <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked"
                      >
                        <Checkboxs>记住密码 </Checkboxs>
                      </Form.Item>
                      <Span>忘记密码？</Span>
                    </Flexdiv>
                    <Form.Item {...tailLayout}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        style={{ width: '100%' }}
                      >
                        登录
                      </Button>
                    </Form.Item>
                  </Form>
                </Panel>
              </Tabs.TabPane>
            </Tabs>
          </Main>
        </Container>
      </Div>
    </>
  );
});
const H1 = styled.h1`
  color: #1a89fe;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  font-weight: 600;
`;
const Logo = styled.div`
  background-image: url(${require('./assets/LOGO.png').default});
  background-repeat: no-repeat;
  background-size: contain;
  width: 180px;
  height: 80px;
  position: absolute;
  left: 45px;
  top: 35px;
`;
const Flexdiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #999999;
  margin-top: 5px;
  cursor: pointer;
`;
const Checkboxs = styled(Checkbox)`
  font-size: 16px !important;
  color: #999999;
`;
const Div = styled.div`
  background-image: url(${require('./assets/bg.jpg').default});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`;
const Container = styled.div`
  width: 640px;
  height: 620px;
  position: absolute;
  right: 300px;
  top: calc(50% - 300px);
  background: url(${require('./assets/login_bg.png').default}) no-repeat;
  background-size: cover;
`;
const Main = styled.div`
  position: absolute;
  top: calc(50% - 210px);
  left: calc(50% - 184px);
  width: 385px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 30px;
  background-color: rgba(255,255,255,95%);
  box-shadow: 1px 1px 2px #666;
`;
const Panel = styled.div``;
export const Error = styled(Alert)`
  height: 17px;
  font-size: 14px;
  background-color: #fff;
  border: none;
  .ant-alert-message {
    position: absolute;
    top: -10px;
    color: #e7331a;
    margin-left: -10px;
  }
  .ant-alert-error .ant-alert-icon {
    color: #e7331a;
  }
  .ant-alert-icon {
    top: -6px;
    left: 0;
  }
`;
