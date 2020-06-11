import Vue from "vue";
import VueRouter from "vue-router";

// import index from '@/pages/index/index.vue'
import home from '@/components/home.vue'
import index from '@/components/index.vue'
import copyright from '@/components/copyright/copyrightView.vue'
import owner from '@/components/copyright/ownership.vue'
import use from '@/components/copyright/rightUse.vue'

// 我的声明
import statement from '@/components/statement/statement.vue'
import putForward from '@/components/statement/putForward.vue'
import mentioned from '@/components/statement/mentioned.vue'
import statementAdd from '@/components/statement/add.vue'


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
		path: '/Jubiter/cz/statement',  
		name: 'statement',
		component: statement,
		children: [{
				path: '/',
				name: 'putForward',
				components: {
					statement: putForward
				},
				children: [{
					path: 'add',
					name: 'statementAdd',
					components: {
						statementAdd: statementAdd
					}
				}],
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
