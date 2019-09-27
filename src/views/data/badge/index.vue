<template>
    <section>
        <el-badge is-dot :value="200" :max="99" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>
    </section>
</template>

<script>
    /**
     * 标记组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'badge'
    }
</script>

<style scoped>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>