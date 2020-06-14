import Vue from "vue";
import VueRouter from "vue-router";

// import index from '@/pages/index/index.vue'
import home from '@/components/home.vue'
import index from '@/components/index.vue'

//著作权
import copyright from '@/components/copyright/copyrightView.vue'
import owner from '@/components/copyright/ownership.vue'
import use from '@/components/copyright/rightUse.vue'
import copyrightAdd from '@/components/copyright/add.vue'
import copyrightAddAuthApply from '@/components/copyright/addAuthApply.vue'
import certificate from '@/components/copyright/certificate.vue'  //存证证书
import licensed from '@/components/copyright/toLicensed.vue'  //授权给
import exhibit from '@/components/copyright/exhibit.vue'  //出示


// 我的声明
import statement from '@/components/statement/statement.vue'
import putForward from '@/components/statement/putForward.vue'
import mentioned from '@/components/statement/mentioned.vue'
import statementAdd from '@/components/statement/add.vue'   //添加
import stateCert from '@/components/statement/certificate.vue'  //存证证书


// 待处理
import processed from '@/components/processed/processed.vue'
import processLeft from '@/components/processed/left.vue'
import processRight from '@/components/processed/right.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/Jubiter',
		name: 'home',
		component: home
	},
	{
		path: '/',
		name: 'copyright',
		component: copyright,

	},
	{
		path: '/Jubiter/cz/copyright',
		name: 'copyright',
		component: copyright,
		children: [{
			path: '/',
			name: 'owner',
			components: {
				copyright: owner
			}
		},
		{
			path: 'use',
			name: 'use',
			components: {
				copyright: use
			}
		},
		]
	},
	{
		path: '/Jubiter/cz/copyright/owner/add',  //新增
		name: 'copyrightAdd',
		component: copyrightAdd,

	},
	{
		path: '/Jubiter/cz/copyright/owner/addAuthApply',  //新增存证授权请求
		name: 'copyrightAddAuthApply',
		component: copyrightAddAuthApply,

	},
	//详情
	{
		path: '/Jubiter/cz/copyright/certificate/:certHash',   //参数:表格数据ID
		name: 'certificate',
		component: certificate,
	},
	// 授权给
	{
		path: '/Jubiter/cz/copyright/certificate/:id/licensed',
		name: 'licensed',
		component: licensed,
	},
	//出示 exhibit--
	{
		path: '/Jubiter/cz/copyright/certificate/:id/exhibit',
		name: 'exhibit',
		component: exhibit,
	},

	/**
	 * 声明部分
	 */
	{
		path: '/Jubiter/cz/statement',
		name: 'statement',
		component: statement,
		children: [{
			path: '/',
			name: 'putForward',
			components: {
				statement: putForward
			}
		},
		{
			path: 'mentioned',
			name: 'mentioned',
			components: {
				statement: mentioned
			}
		},

		]
	},
	{
		path: '/Jubiter/cz/statement/add',
		name: 'statementAdd',
		component: statementAdd
	},
	//详情
	{
		path: '/Jubiter/cz/copyright/statement/:id',   //参数:表格数据ID
		name: 'stateCert',
		component: stateCert,
	},
	// 授权给
	// {
	// 	path: '/Jubiter/cz/copyright/certificate/:id/licensed',  
	// 	name: 'licensed',
	// 	component: licensed,
	// },
	//出示 exhibit--
	// {
	// 	path: '/Jubiter/cz/copyright/certificate/:id/exhibit',  
	// 	name: 'exhibit',
	// 	component: exhibit,
	// },



	// 待处理
	{
		path: '/JuBiterHelp/zh-cn',
		name: 'index',
		component: index,
	},
	{
		path: '/Jubiter/cz/processed',
		name: 'processed',
		component: processed,
		children: [{
			path: 'accredit/:id',
			name: 'processRight',
			components: {
				process: processRight
			}
		}],
	}

];

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: routes
})

export default router;
