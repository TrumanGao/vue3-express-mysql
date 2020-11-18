module.exports = {
	lintOnSave: true,
	productionSourceMap: false,
	devServer: {
		port: 8090,
		open: true,
		proxy: {
			"/api/": {
				target: "localhost:3000",
				pathRewrite: {
					"^/api/": "/"
				}
			},
		}
	},
	css: {
		loaderOptions: {
			// 配置css样式兼容（浏览器厂商前缀）
			postcss: {
				plugins: [
					require("autoprefixer")({
						// 配置使用 autoprefixer
						overrideBrowserslist: ["last 20 versions"] // 记得这里要把 browsers 改为 overrideBrowserslist，autoprefixer 新版本的写法有变
					})
				]
			}
		}
	},
	configureWebpack: config => {
		if (process.env.NODE_ENV === "production") {
			// 为生产环境修改配置...
			config.mode = "production";
			config.devtool = "none";
		} else {
			// 为开发环境修改配置...
			config.mode = "development";
			config.devtool = "cheap-module-eval-source-map";
		}
	},
	// Vue CLI 内部的 webpack 配置是通过 webpack-chain 维护的。这个库提供了一个 webpack 原始配置的上层抽象，使其可以定义具名的 loader 规则和具名插件，并有机会在后期进入这些规则并对它们的选项进行修改。
	chainWebpack: config => {
		// 移除 prefetch 插件，防止预拉取（优化网络）
		config.plugins.delete("prefetch");

		config.plugin("html").tap(args => {
			// 修改项目标题
			args[0].title = "Vue.js + TypeScript";
			return args;
		});
	}
}
