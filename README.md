## 这是什么？
cra-template-gtja-cz 是一个自定义的 create-react-app 模板，不同于默认的 cra-template。这个模板中提供的常规开发前期所需要的大部分配置，例如：内置好的 antd 及所需配置、redux、react-route 以及前端代码工作流规范。使我们能避开在项目初始时进行的这些必要的配置操作，而专注于具体业务的代码实现。  

## ✨ 特性 

- Ant design  
ant design 是一套非常优秀的企业级 UI 设计语言和 React 组件库，模板中现在已经内置，这里你无需进行主题配置、css 文件引入、国际化等，项目初始化后就可以直接使用。  

- Redux toolkit 
redux是非常好用应用程序的状态管理插件，提供可预测的状态管理。模板中具体使用可以参考[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)   

- generators  
模板中添加了自动代码生成脚本，如果你想在项目中添加一个新的模块或者组件，可以使用generator，它可以帮助你快速生成你想要添加的文件。你可以通过在终端中运行`yarn generator`或者`npm run generator`指令来运行它。  

- commitlint  
模板中内置了统一的git commitlint,它将项目的git提交的规范化，并对提交代码进行格式化，这对团队协作开发时非常有用！ 

- 其它  
模板中另外内置的统一的登陆页面和首页的部分UI。具体可以在安装万模板后运行查看。


## 📦 安装与使用

使用cra-template初始化项目

``` 
npx create-react-app --template cra-template-gtja-cz my-app
```

启动

```cd my-app
yarn start
```

## 🚑 无法安装？

如果遇到网络问题无法安装，可以先下载模板全局安装在本地，在执行上面安装操作  

#### 安装模板  
```
yarn add cra-template-gtja-cz -g
```

## [github地址](https://github.com/ltbyce/cra-template-gtja-cz)


