# spider_888ly_travel

八爪鱼在线旅游网，指定出境路线导出（网速慢的话，加大脚本中waitsec的值，这是控制页面加载的时间的，防止没加载好就取了）

(一) 环境
 1 . 安装浏览器firefox   安装扩展greasemonkey

![image](https://github.com/sky8chi/spider_888ly_travel/blob/master/screenshots/7.jpg)

 2 . 导入脚本 低版本直接拖进浏览器 高版本需要配置浏览器安全选项。简单方式新建个新脚本随便写，复制888ly.js内容进新脚本内

![image](https://github.com/sky8chi/spider_888ly_travel/blob/master/screenshots/8.jpg)

（二）运行

http://fxs.888ly.cn/Home.aspx

 1 . 登录后从首页导航点击出境->选择线路美洲

![image](https://github.com/sky8chi/spider_888ly_travel/blob/master/screenshots/0.jpg)

 2 . 进入页面会触发脚本弹出开始抓取的弹框

![image](https://github.com/sky8chi/spider_888ly_travel/blob/master/screenshots/1.jpg)

 3 . 等待自动抓取，自动翻页结束会提示打开控制台（需先点击关闭再打开）

![image](https://github.com/sky8chi/spider_888ly_travel/blob/master/screenshots/2.jpg)

 4 . shift+ctrl+j 组合打开控制台（数据量大会折叠，点击右下角展开）

![image](https://github.com/sky8chi/spider_888ly_travel/blob/master/screenshots/3.png)

 5 . 右击选中所有，再右击复制

![image](https://github.com/sky8chi/spider_888ly_travel/blob/master/screenshots/5.jpg)

 6 . 打开空的excel,选中第一个单元格，粘贴（经销商，id, 产品名称， 产品url）

![image](https://github.com/sky8chi/spider_888ly_travel/blob/master/screenshots/6.jpg)
