import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const mark = r=>require.ensure([],()=>r(require('@/views/mark')),'mark')
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:"/mark",
            component:mark
        },
        {
            path: "/",
            component: () => import("@/views/index"),
            redirect: "/lineMergeList",
            meta: {btnPermissions: ['admin', 'supper']},
            children: [
                {
                    path: 'lineMergeList',
                    component: () => import('@/views/lineMerge/LineMergeList.vue'),
                    meta: {btnPermissions: ['admin', 'supper']}
                },
                {
                    path: 'lineMoving',
                    component: () => import('@/views/lineMoving/LineMovingList.vue'),
                    meta: {btnPermissions: ['supper']}
                },
            ]
        },
        {
            path: '/component',
            component: () => import("@/views/index"),
            redirect: "/component/button",
            meta: {btnPermissions: ['admin', 'supper']},
            children: [
                {
                    path: 'button',
                    component: () => import('@/views/button/index.vue'),
                    meta: {btnPermissions: ['admin', 'supper']}
                },
                {
                    path: 'form',
                    component: () => import('@/views/form/index.vue'),
                    meta: {btnPermissions: ['admin', 'supper']}
                },
                {
                    path: 'data',
                    component: () => import('@/views/data/index.vue'),
                    meta: {btnPermissions: ['admin', 'supper']}
                },
                {
                    path: 'other',
                    component: () => import('@/views/other/index.vue'),
                    meta: {btnPermissions: ['admin', 'supper']}
                },
                {
                    path: 'navigation',
                    component: () => import('@/views/navigation/index.vue'),
                    meta: {btnPermissions: ['admin', 'supper']},
                    children: [
                        {
                            path: 'calendar',
                            component: () => import('@/views/navigation/calendar/index.vue'),
                            meta: {btnPermissions: ['admin', 'supper']}
                        },
                        {
                            path: 'img',
                            component: () => import('@/views/navigation/imgCom/index.vue'),
                            meta: {btnPermissions: ['admin', 'supper']}
                        },
                        {
                            path: 'infiniteScroll',
                            component: () => import('@/views/navigation/infiniteScroll/index.vue'),
                            meta: {btnPermissions: ['admin', 'supper']}
                        },
                        {
                            path: 'drawer',
                            component: () => import('@/views/navigation/drawer/index.vue'),
                            meta: {btnPermissions: ['admin', 'supper']}
                        },
                        {
                            path: 'tab',
                            component: () => import('@/views/navigation/tab/index.vue'),
                            meta: {btnPermissions: ['admin', 'supper']}
                        },
                        {
                            path: 'steps',
                            component: () => import('@/views/navigation/steps/index.vue'),
                            meta: {btnPermissions: ['admin', 'supper']}
                        },
                        {
                            path: 'dropdown',
                            component: () => import('@/views/navigation/dropdown/index.vue'),
                            meta: {btnPermissions: ['admin', 'supper']}
                        }
                    ]
                },


            ]
        }
    ]
})

// import Vue from 'vue'
// import Router from 'vue-router'
//
// Vue.use(Router)
//
// export default new Router({
//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             component: resolve => require(['@/views/lineMerge/LineMergeList.vue'],resolve),
//             meta: { btnPermissions: ['admin'] }
//         },
//         {
//             path: '/lineMoving',
//             component: resolve => require(['@/views/lineMoving/LineMovingList.vue'],resolve),
//             meta: { btnPermissions: ['lalal'] }
//         },
//     ]
// })
