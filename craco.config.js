/*
 * @Author: shiruiqiang
 * @Date: 2022-10-13 14:45:07
 * @LastEditTime: 2022-11-22 17:15:40
 * @LastEditors: shiruiqiang
 * @FilePath: craco.config.js
 * @Description:
 */
const path = require('path');
const CracoLessPlugin = require('craco-less');
module.exports = {
	webpack: {
		output: {
			publicPath: './',
			path: path.resolve(__dirname, '/dist')
		},
		alias: {
			'@': path.resolve(__dirname, 'src'),
			views: path.resolve(__dirname, './src/views/'),
			components: path.resolve(__dirname, './src/components/'),
			model: path.resolve(__dirname, './src/model/'),
			utils: path.resolve(__dirname, './src/utils/'),
			request: path.resolve(__dirname, './src/request/'),
			hooks: path.resolve(__dirname, './src/hooks/'),
		},
	},
	devServer: {
		open: true,
		host: 'localhost',
		port: '8081',
		proxy: {},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			// options: {
			// 	lessLoaderOptions: {
			// 		lessOptions: {
			// 			modifyVars: {'@primary-color': '#1DA57A'},
			// 			javascriptEnabled: true,
			// 		},
			// 	},
			// },
		},
	],
};
