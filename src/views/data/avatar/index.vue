<template>
    <section>
        <!--shape	设置头像的形状        -->
        <el-avatar shape="circle" :size="100" :fit="fit" :src="url"></el-avatar>
    </section>
</template>

<script>
    /**
     * 头像
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'avatar',
        data() {
            return {
                fit: 'fill',
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        }
    }
</script>

<style scoped>

</style>