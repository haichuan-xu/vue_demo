<template>
    <el-container id="app-container">
        <el-header class="header">
            <Header></Header>
        </el-header>
        <el-container>
            <el-aside style="width:200px;">
                <leftBar/>
            </el-aside>
            <el-container>
                <el-main style="padding: 10px">
                    <!--<Nav />-->
                    <router-view/>
                </el-main>
                <el-footer>
                    <!-- 自定义脚部 -->
                    <Footer></Footer>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
    /**
     * Home
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    //引入侧边栏
    import leftBar from "@/components/left-bar/index.vue";
    // 引入头部
    import Header from '@/components/TheHeader';
    // 引入脚部
    import Footer from '@/components/TheFooter';

    export default {
        name: 'home',
        components: {
            leftBar,
            Header,
            Footer
        }
    };
</script>
<style scoped>
    #app-container {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .header {
        border-bottom: 1px solid #d3d3d3;
        background-color: #F5F5F5;
    }

    /* 脚部样式 */
    .el-footer {
        width: 100%;
        height: 60px;
        background-color: #eee;
        color: #666;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        color: #333;
        height: 100px;
        overflow-y: auto;
    }

</style>