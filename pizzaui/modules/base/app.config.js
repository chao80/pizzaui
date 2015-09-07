seajs.config({
	// Sea.js 的基础路径
	base: '/pizzaui/modules/',
	// 别名配置
	alias: {
		'util': 'util/util'
	},
	// 变量配置
	vars: {
		'locale': 'zh-cn'
	},
	// 调试模式
	debug: true,
	// 文件编码
	charset: 'utf-8'
});

//启动app.js
seajs.use("base/app");