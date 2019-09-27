<template>
    <section>
        <el-dropdown placement="top-start" :show-timeout="3000" :hide-timeout="3000">
            <el-button type="primary" @command="handleCommand">
                悬停触发<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" split-button type="primary" @click="handleClick" @command="handleCommand">
            点击触发
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </section>
</template>

<script>
    /**
     * 下拉菜单组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'dropdown',
        data() {
            return {}
        },
        methods: {
            /**
             * 功能按钮点击
             *
             */
            handleClick() {
                alert('点箭头啦！');
            },
            /**
             * 点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作
             *
             * @param command
             */
            handleCommand(command) {
                this.$message('点击' + command);
            }
        }
    }
</script>

<style scoped>
    .el-dropdown {
        vertical-align: top;
    }

    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>