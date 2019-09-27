<template>
    <div class="nav-container">
        <div class="nav-menus">
            <el-menu
                    :default-active="activeIndex"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
            >
                <div v-for="(v,i) in navData" :key="i">
                    <el-menu-item :index="v.menuIndex" v-if="v.subMenu.length === 0" @click="linkRoute(v)">
                        <span>{{v.name}}</span>
                    </el-menu-item>
                    <el-submenu :index="v.menuIndex" v-else>
                        <template slot="title">
                            <span>{{v.name}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item
                                    @click="linkRoute(subV)"
                                    v-for="(subV, subI) in v.subMenu"
                                    :index="subV.subIndex"
                                    :key="subI"
                            >{{subV.name}}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </div>
            </el-menu>
        </div>

    </div>
</template>
<script>
    /**
     * 左侧菜单栏
     *
     *@date 2019-09-13
     *@author liuzhuang
     */
    import "./index.scss";
    export default {
        name: 'leftBar',
        data() {
            return {
                navData: [
                    {
                        name: "行样式和行上下移动",
                        menuIndex: "1",
                        subMenu: [
                            {
                                name: "行样式",
                                subIndex: "1-1",
                                route: "/lineMergeList",
                            },
                            {
                                name: "行上下移动",
                                subIndex: "1-2",
                                route: "/lineMoving",
                            },
                        ]
                    },
                    {
                        name: "基础组件",
                        menuIndex: "2",
                        subMenu: [
                            {
                                name: "按钮",
                                subIndex: "2-1",
                                route: "/component/button",
                            },
                            {
                                name: "表单",
                                subIndex: "2-2",
                                route: "/component/form",
                            },
                            {
                                name: "data",
                                subIndex: "2-3",
                                route: "/component/data",
                            },
                            {
                                name: "other",
                                subIndex: "2-4",
                                route: "/component/other",
                            },
                            {
                                name: "navigation",
                                subIndex: "2-5",
                                route: "/component/navigation",
                            },
                        ]
                    },
                ],
                activeIndex: "1"
            };
        },
        mounted() {
            this.setCurrentRoute(this.$router.history.current.path)
        },
        methods: {
            linkRoute(v) {
                this.$router.push({path: v.route});
            },
            setCurrentRoute(path) {
                if (path.indexOf("/lineMergeList") > -1) {
                    this.activeIndex = "1-1";
                    return
                }
                if (path.indexOf("/lineMoving") > -1) {
                    this.activeIndex = "1-2";
                    return
                }
                if (path.indexOf("/component/button") > -1) {
                    this.activeIndex = "2-1";
                    return
                }
                if (path.indexOf("/component/form") > -1) {
                    this.activeIndex = "2-2";
                    return
                }
                if (path.indexOf("/component/data") > -1) {
                    this.activeIndex = "2-3";
                    return
                }
                if (path.indexOf("/component/other") > -1) {
                    this.activeIndex = "2-4";
                    return
                }
                if (path.indexOf("/component/navigation") > -1) {
                    this.activeIndex = "2-5";
                    return
                }
            },
        },
        watch: {
            $route(currentRoute) {
                this.setCurrentRoute(currentRoute.path)
            }
        }
    };
</script>

