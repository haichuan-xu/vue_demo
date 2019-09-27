<template>
    <section>
        <LineMovingTable ref="listTable"></LineMovingTable>
    </section>
</template>
<script>
    /**
     * 行移动form
     *
     *@date 2019-09-11
     *@author liuzhuang
     */
    import LineMovingTable from './LineMovingTable'
    export default {
        name: 'LineMovingForm',
        components:{
            LineMovingTable
        },
        data() {
            return {}
        },
        methods:{},
        mounted(){
            this.$refs.listTable.initTable();
        }
    }
</script>
<style scoped>

</style>