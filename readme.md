<!--
 * @Author: your name
 * @Date: 2021-07-27 14:35:50
 * @LastEditTime: 2021-07-27 14:54:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-test/readme.md
-->

<!-- webpack -> vite 雪碧图 -->
1. "webpack-spritesmith" -> "vite-plugin-spritesmith"
    安装依赖包 vite-plugin-spritesmith [来自社区插件](https://github.com/evont/vite-plugin-spritesmith) [其他社区插件](https://github.com/vitejs/awesome-vite#plugins)
    `npm install --save-dev vite-plugin-spritesmith`
2. vite.config.js配置 详见文件vite.config.js
3. 使用 <i :class="icon-name"></i>  icon-name为对应icon的class（详见文件yp-icons.less）
