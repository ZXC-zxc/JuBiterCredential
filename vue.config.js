const webpack = require('webpack')
let CompressionPlugin = require("compression-webpack-plugin"); //文件压缩
const JavaScriptObfuscator = require('webpack-obfuscator');  //js加密
const vConsole = require('vconsole-webpack-plugin')  //手机端调试

const encryption = false; // 打包后的代码是否加密

let outputDir = process.env.VUE_APP_ACT_NO //bulid后文件名称
// 接收运行参数
const argv = require('yargs')
	.describe('debug', 'debug 环境') // use 'webpack --debug'
	.argv;

// 引入获取命令行参数js  参数不为空替换参数
const environment = require("./util/environment");
const actNo = environment.actNo;
if (actNo != undefined && actNo != null && actNo != "") {
	outputDir = actNo;
}
console.log(actNo + "-----------actNo--outputDir---" + outputDir)

const baseUrl = process.env.NODE_ENV === 'production' ? '/' + outputDir + '/' : '/'

const titleName = "JuBiterCZ页面"  //index title名称


const timestamp = new Date().getTime();  //当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳
//调用组装pages方法
let pageMethod = require('./util/getPages.js');
pages = pageMethod.pages(titleName);
console.log(pages)
module.exports = {
	publicPath: baseUrl,
	outputDir: outputDir,
	assetsDir: 'static',   //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	filenameHashing: true,//默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，这个选项设为 false 来关闭文件名哈希
	productionSourceMap: false,
	//后端 API 服务器 解决跨域  本地解决方法，生产需要nginx配置
	devServer: {
		index: 'index.html', //默认启动serve 打开home.html页面
		port: 8080, // 端口
		proxy: {
			'/': {
				target: 'http://192.168.17.45:8471/',  // target host
				ws: true,  // proxy websockets
				changeOrigin: true,  // needed for virtual hosted sites
				pathRewrite: {
					'': ''  // rewrite path
				}
			},
		},
	},
	pages,
	css: {
		extract: true,// 是否使用css分离插件 ExtractTextPlugin
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/scss/variable.scss";`
			}
		}
	},
	// webpack配置
	chainWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			//添加版本号 解决build缓存问题
			config.output.filename('static/js/[name].[chunkhash].' + timestamp + '.js').end()
			config.output.chunkFilename('static/js/[id].[chunkhash].' + timestamp + '.js').end()
			// ============压缩图片 start============
			// config.module
			// .rule('images')
			// .use('image-webpack-loader')
			// .loader('image-webpack-loader')
			// .options({ bypassOnDebug: true })
			// .end()
			// ============压缩图片 end============
		}
		// 移除 prefetch 插件
		config.plugins.delete('prefetch-index')
		// 移除 preload 插件
		config.plugins.delete('preload-index');
		config.plugin('provide').use(webpack.ProvidePlugin, [{
			$: 'jquery',
			jquery: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}])
	},
	configureWebpack: config => {
		const productionGzipExtensions = ['html', 'js', 'css']
		config.plugins.push(
			// gzip压缩
			new CompressionPlugin({
				filename: '[path].gz[query]',
				algorithm: 'gzip',
				test: new RegExp(
					'\\.(' + productionGzipExtensions.join('|') + ')$'
				),
				threshold: 5120, // 只有大小大于该值的资源会被处理 5120
				minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
				deleteOriginalAssets: false // 删除原文件
			}),
			//手机端调试
			new vConsole({
				filter: [],     // 需要过滤的入口文件
				enable: !!argv.debug
			})
		)
		if (process.env.NODE_ENV === 'production' && encryption == true) {
			config.plugins.push(
				//js代码加密
				new JavaScriptObfuscator({
					rotateUnicodeArray: true, // 必须为true
					compact: true, // 紧凑 从输出混淆代码中删除换行符。
					controlFlowFlattening: false, // 此选项极大地影响了运行速度降低1.5倍的性能。 启用代码控制流展平。控制流扁平化是源代码的结构转换，阻碍了程序理解。
					controlFlowFlatteningThreshold: 0.8,
					deadCodeInjection: true, // 此选项大大增加了混淆代码的大小（最多200％） 此功能将随机的死代码块（即：不会执行的代码）添加到混淆输出中，从而使得更难以进行反向工程设计。
					deadCodeInjectionThreshold: 0.5,
					debugProtection: false, // 调试保护  如果您打开开发者工具，可以冻结您的浏览器。 
					debugProtectionInterval: true, // 如果选中，则会在“控制台”选项卡上使用间隔强制调试模式，这使得使用“开发人员工具”的其他功能变得更加困难。它是如何工作的？一个调用调试器的特殊代码;在整个混淆的源代码中反复插入。
					disableConsoleOutput: true, // 通过用空函数替换它们来禁用console.log，console.info，console.error和console.warn。这使得调试器的使用更加困难。
					domainLock: [], // 锁定混淆的源代码，使其仅在特定域和/或子域上运行。这使得有人只需复制并粘贴源代码并在别处运行就变得非常困难。多个域和子域可以将代码锁定到多个域或子域。例如，要锁定它以使代码仅在www.example.com上运行添加www.example.com，以使其在example.com的任何子域上运行，请使用.example.com。
					identifierNamesGenerator: 'hexadecimal', // 使用此选项可控制标识符（变量名称，函数名称等）的混淆方式。
					identifiersPrefix: '', // 此选项使所有全局标识符都具有特定前缀。
					inputFileName: '',
					log: false,
					renameGlobals: false, // 不要启动 通过声明启用全局变量和函数名称的混淆。 
					reservedNames: [], // 禁用模糊处理和生成标识符，这些标识符与传递的RegExp模式匹配。例如，如果添加^ someName，则混淆器将确保以someName开头的所有变量，函数名和函数参数都不会被破坏。
					reservedStrings: [], // 禁用字符串文字的转换，字符串文字与传递的RegExp模式匹配。例如，如果添加^ some * string，则混淆器将确保以某些字符串开头的所有字符串都不会移动到`stringArray`。
					rotateStringArray: true, // 
					seed: 0, // 默认情况下（seed = 0），每次混淆代码时都会得到一个新结果（即：不同的变量名，插入stringArray的不同变量等）。如果需要可重复的结果，请将种子设置为特定的整数。
					selfDefending: false, // 此选项使输出代码能够抵抗格式化和变量重命名。如果试图在混淆代码上使用JavaScript美化器，代码将不再起作用，使得理解和修改它变得更加困难。需要紧凑代码设置。
					sourceMap: false, // 请确保不要上传嵌入了内嵌源代码的混淆源代码，因为它包含原始源代码。源映射可以帮助您调试混淆的Java Script源代码。如果您希望或需要在生产中进行调试，可以将单独的源映射文件上载到秘密位置，然后将浏览器指向该位置。
					sourceMapBaseUrl: '', // 这会将源的源映射嵌入到混淆代码的结果中。如果您只想在计算机上进行本地调试，则非常有用。
					sourceMapFileName: '',
					sourceMapMode: 'separate',
					stringArray: true, // 将stringArray数组移位固定和随机（在代码混淆时生成）的位置。这使得将删除的字符串的顺序与其原始位置相匹配变得更加困难。如果原始源代码不小，建议使用此选项，因为辅助函数可以引起注意。
					stringArrayEncoding: false, // 此选项可能会略微降低脚本速度。使用Base64或RC4对stringArray的所有字符串文字进行编码，并插入一个特殊的函数，用于在运行时将其解码回来。
					stringArrayThreshold: 0.8, // 您可以使用此设置调整字符串文字将插入stringArray的概率（从0到1）。此设置在大型代码库中很有用，因为对stringArray函数的重复调用会降低代码的速度。
					target: 'browser', // 您可以将混淆代码的目标环境设置为以下之一： Browser 、Browser No Eval 、Node 目前浏览器和节点的输出是相同的。
					transformObjectKeys: false, // 转换（混淆）对象键。例如，此代码var a = {enabled：true};使用此选项进行模糊处理时，将隐藏已启用的对象键：var a = {};a [_0x2ae0 [（'0x0'）] = true;。 理想情况下与String Array设置一起使用。
					unicodeEscapeSequence: true, // 将所有字符串转换为其unicode表示形式。例如，字符串“Hello World！”将被转换为“'\ x48 \ x65 \ x6c \ x6c \ x6f \ x20 \ x57 \ x6f \ x72 \ x6c \ x64 \ x21”。
				}, ['ft.js']) // abc.js 是不混淆的代码
			)
		}
	}

}
console.log(process.env.NODE_ENV);
console.log(process.env.VUE_APP_URL);
console.log(process.env.BASE_URL);