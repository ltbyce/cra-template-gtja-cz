/**
 *
 * Demo1
 *
 */

import { Button } from 'antd';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

interface Props {}

export const Demo1 = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>Demo1</title>
        <meta name="description" content="Description of Demo1" />
      </Helmet>
      <h1>Demo1</h1>
    </>
  );
});

export const FullView = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>全景</title>
        <meta name="description" content="Description of 全景" />
      </Helmet>
      <h1>全景</h1>
    </>
  );
});

export const MessageRecord = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>信息补录</title>
        <meta name="description" content="Description of 信息补录" />
      </Helmet>
      <h1>信息补录</h1>
    </>
  );
});

export const Govern = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>治理</title>
        <meta name="description" content="Description of 治理" />
      </Helmet>
      <h1>治理</h1>
    </>
  );
});

export const ManagementSet = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>管理设置</title>
        <meta name="description" content="Description of 管理设置" />
      </Helmet>
      <h1>管理设置</h1>
    </>
  );
});

export const Map = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>地图</title>
        <meta name="description" content="Description of 地图" />
      </Helmet>
      <h1>地图</h1>
    </>
  );
});

export const Security = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>安全</title>
        <meta name="description" content="Description of 安全" />
      </Helmet>
      <h1 style={{ height: 2000 }}>安全</h1>
    </>
  );
});
