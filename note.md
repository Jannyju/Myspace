
## ATOM 设置
- 安装ATOM,Anaconda,配置ATOM 编写python
ATOM教程
https://www.w3cschool.cn/atom/jkhv1hr0.html

- MAC安装ATOM随记
https://blog.csdn.net/haornlx/article/details/79751191

- Anaconda介绍、安装及使用教程
https://www.jianshu.com/p/62f155eb6ac5

- MAC OS 配置ATOM 编写python
https://blog.csdn.net/qq_39763472/article/details/84335935?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task
ide-c-cpp
ctrl+r

- Atom编辑器入门到精通(四) Atom使用进阶
https://blog.csdn.net/u010494080/article/details/50993771?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

- Atom | 用最酷的编辑器 写最美的代码  packages
https://blog.csdn.net/mp624183768/article/details/83061142?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

- Atom安装插件的几个方法
https://www.jianshu.com/p/c24703adbebe
命令行：
(base) localhost:/ yuanqunju$ cd ~/.atom/packages
(base) localhost:packages yuanqunju$ apm install atom-beautify
Installing atom-beautify to /Users/yuanqunju/.atom/packages

- Atom安装并配置C/C++开发环境
https://blog.csdn.net/qq_36731677/article/details/80259085
mac 自带 gcc, g++
fn + F6

- Atom 编辑器实现HTML实时预览
https://blog.csdn.net/panshaoling/article/details/79778744
Ctrl + Shift + H

## 其他环境配置
1. git配置，mac系统下, github
https://blog.csdn.net/u011296485/article/details/83717493
https://www.jianshu.com/p/b9528cce4e9f

*Mygithub*
- https://github.com/Jannyju/Myspace  
- // MYGIT Account:Jannyju mac password,没有大写
- git clone // checkout
- git add . // add files
- git commit -m 'some notes here'
- git push
- git pull //update

2. 安装centOS: mirrors.163.com
http://mirrors.163.com/centos/7.7.1908/isos/x86_64/
min版本

3. Mac 安装 XAMPP教程
https://www.jianshu.com/p/613a51aae849
(base) localhost:/ yuanqunju$ sudo /usr/sbin/apachectl restart
(base) localhost:/ yuanqunju$ sudo /usr/sbin/apachectl stop
(base) localhost:/ yuanqunju$ sudo /usr/sbin/apachectl start
http://www.mysites.com/Myspace/data_communication/server.html


4. Mac 安装nodejs
https://blog.csdn.net/yst19910702/article/details/89714544
 - npm -v
 - node -v
 - node nodejstest.js
 - npm ->cnpm
    - npm.taobao.org
    - npm install -g cnpm --registry=https://registry.npm.taobao.org
    - sudo npm

5. 安装 babel
https://babeljs.io/setup
 - 选择CLI  -D
 - add "build": "babel src -d lib" (之前可以加脚本)
  -  npm install babel-cli -D
  -  npm install babel-preset-env -D
  - .babelrc
   ```
       {
         "presets": ["env"]
       }
    ```
  - package.json
    ```
        "scripts": {
          "build": "babel js -d lib"
        },
    ```  
  - write a js file "js/1.js"
  - npm run build -> build js file -> lib
  - write a html file
  ```
  <script
   src = "lib/1.js" charset = "utf-8">
  </script>
    ```
6.  mac下safari和chrome打开开发者工具, *option(alt)+command+i*


## ES6 笔记
1. ES6 教程
https://www.runoob.com/w3cnote/es6-tutorial.html
