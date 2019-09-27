<template>
    <section class="i-s">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>组件列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row type="flex" justify="space-around" style="text-align: center">
            <el-col :span="11" :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <div class="bg-purple">
                    <TheTag></TheTag>
                </div>
            </el-col>
            <el-col :span="11" :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <div class="bg-purple">
                    <TheProgress></TheProgress>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around" style="text-align: center">
            <el-col :span="11" :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <div class="bg-purple">
                    <TheTree></TheTree>
                </div>
            </el-col>
            <el-col :span="11" :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <div class="bg-purple">
                    <ThePagination></ThePagination>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around" style="text-align: center">
            <el-col :span="11" :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <div class="bg-purple">
                    <TheBadge></TheBadge>
                </div>
            </el-col>
            <el-col :span="11" :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <div class="bg-purple">
                    <TheAvatar></TheAvatar>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    /**
     * 组件库
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    //引入tag
    import TheTag from './tag/index.vue';
    //引入Progress
    import TheProgress from './progress/index.vue';
    //引入Tree
    import TheTree from './tree/index.vue';
    //引入Paginatio
    import ThePagination from './pagination/index.vue';
    //引入Badge
    import TheBadge from './badge/index.vue';
    //引入Avatar
    import TheAvatar from './avatar/index.vue';

    export default {
        name: "index",
        components: {
            TheTag,
            TheProgress,
            TheTree,
            ThePagination,
            TheBadge,
            TheAvatar
        }
    }
</script>

<style scoped>
    .i-s {
        width: 100%;
    }

    .bg-purple {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        min-height: 100px;
        background-color: #d3d3d3;
        border-radius: 15px;
        padding: 20px;
    }
</style>