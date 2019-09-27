<template>
    <section>
        <LineMergeTable ref="listTable"></LineMergeTable>
    </section>
</template>

<script>
    /**
     * 表格行合并Form
     *
     *@date 2019-09-11
     *@author liuzhuang
     */
    // 引入表格行合并form
    import LineMergeTable from './LineMergeTable'
    export default {
        name: 'LineMergeForm',
        components: {
            LineMergeTable
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {
            this.$refs.listTable.initTable();
        }
    }
</script>

<style scoped>

</style>