/*
 * @Author: your name
 * @Date: 2021-07-26 16:36:26
 * @LastEditTime: 2021-08-05 10:40:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-test/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Spritesmith from 'vite-plugin-spritesmith';
const iconsTemp = require('./src/base-be-fe/config/customTemp');
const jsonTemp = require('./src/base-be-fe/config/jsonArray');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Spritesmith({
        watch: true,
        src: {
            cwd: './src/base-be-fe/yp-icons',
            glob: '*.png'
        },
        target: {
            image: './src/base-be-fe/images/yp-icons.png',
            css: [
                ['./src/base-be-fe/styles/yp-icons.less', { format: 'custom_format' }],
                ['./src/base-be-fe/config/icons-config.json', { format: 'doc_json' }]
            ]
        },
        customTemplates: {
            custom_format: iconsTemp.customFormat,
            custom_format_retina: iconsTemp.customFormatRetina,
            doc_json: jsonTemp.customFormat,
            doc_json_retina: jsonTemp.customFormat
        },
        apiOptions: {
            cssImageRef: '../images/yp-icons.png'
        },
        retina: '@2x',
        spritesmithOptions: {
            padding: 4,
            algorithm: 'top-down'
        }
    })
  ]
})
