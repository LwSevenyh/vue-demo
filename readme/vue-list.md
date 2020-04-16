
## vue项目目录讲解
> vue init webpack + 项目名称

> 创建test 项目 vue init webpack test
### 1、build：构建脚本目录 是一些webpack的文件，配置参数什么的，一般不用动

　　　　1）build.js   ==>  生产环境构建脚本；

　　　　2）check-versions.js   ==>  检查npm，node.js版本；

　　　　3）utils.js   ==>  构建相关工具方法；

　　　　4）vue-loader.conf.js   ==>  配置了css加载器以及编译css之后自动添加前缀；

　　　　5）webpack.base.conf.js   ==>  webpack基本配置；

　　　　6）webpack.dev.conf.js   ==>  webpack开发环境配置；

　　　　7）webpack.prod.conf.js   ==>  webpack生产环境配置；
### 2、config：项目配置 基本配置文件

　　　　1）dev.env.js   ==>  开发环境变量；

　　　　2）index.js   ==>  项目配置文件；

　　　　3）prod.env.js   ==>  生产环境变量；

### 3、node_modules：npm 加载的项目依赖模块

### 4、src：这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：

　　　　1）assets：资源目录，放置一些图片或者公共js、公共css。这里的资源会被webpack构建；

　　　　2）components：组件目录，我们写的组件就放在这个目录里面；

　　　　3）router：前端路由，我们需要配置的路由路径写在index.js里面；

　　　　4）App.vue：根组件；

　　　　5）main.js：入口js文件；

### 5、static：静态资源目录，如图片、字体等。生成好的文件会放在这个目录下 ,不会被webpack构建

### 6、test 测试文件夹，测试都写在这里

### 7、index.html：主页 首页入口文件，可以添加一些 meta 信息等

### 8、package.json：npm包配置文件，定义了项目的npm脚本，依赖包等信息

>dependencies：项目发布时的依赖

>devDependencies：项目开发时的依赖

>scripts：编译项目的一些命令

### 9、README：项目的说明文档，markdown 格式

### 10、.xxxx文件：这些是一些配置文件，包括语法配置，git配置等

#### 1 .babelrc babel编译参数，vue开发需要babel编译

#### 2  .editorconfig 看名字是编辑器配置文件，不晓得是哪款编辑器，没有使用过。

#### 3  .gitignore 用来过滤一些版本控制的文件，比如node_modules文件夹
