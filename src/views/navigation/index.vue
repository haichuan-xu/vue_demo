<template>
    <section>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                menu-trigger="click"
                background-color="#808080"
                text-color="#fff"
                router
                active-text-color="#ffd04b">
            <el-menu-item index="/component/navigation/calendar">日历</el-menu-item>
            <el-menu-item index="/component/navigation/img">图片</el-menu-item>
            <el-menu-item index="/component/navigation/infiniteScroll">无限循环</el-menu-item>
            <el-menu-item index="/component/navigation/drawer">抽屉</el-menu-item>
            <el-menu-item index="/component/navigation/tab">标签页</el-menu-item>
            <el-menu-item index="/component/navigation/steps">步骤条</el-menu-item>
            <el-menu-item index="/component/navigation/dropdown">下拉菜单</el-menu-item>
        </el-menu>
        <div>
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
    /**
     * 布局相关组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'navigation',
        data() {
            return {
                //初始位置
                activeIndex: '/component/navigation/calendar',
            };
        },
        mounted() {
            this.getFirstPage();
        },
        methods: {
            /**
             * 菜单激活回调
             *
             * @param key
             * @param keyPath
             */
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            /**
             * 初始页面跳转
             *
             */
            getFirstPage() {
                this.$router.push({
                    path: '/component/navigation/calendar'
                })
            }
        }
    }
</script>

<style scoped>

</style>