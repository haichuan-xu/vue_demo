<template>
    <section>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes=pageSizes
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="10">
        </el-pagination>
    </section>
</template>

<script>
    /**
     * 分页组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'pagination',
        data() {
            return {
                //当前页
                currentPage: 1,
                //页码选择下拉数据
                pageSizes: [5, 10, 15, 20],
            };
        },
        methods: {
            /**
             * 点击页码
             *
             * @param val
             */
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            /**
             * 总页数设置变化
             *
             * @param val
             */
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
        },
    }
</script>

<style scoped>

</style>