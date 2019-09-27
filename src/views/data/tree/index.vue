<template>
    <section>
        <!--highlight-current 高亮
            default-expand-all	是否默认展开所有节点
            expand-on-click-node	是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。
            draggable	是否开启拖拽节点功能-->
        <el-tree :data="data" :props="defaultProps" draggable highlight-current @node-click="handleNodeClick"></el-tree>
    </section>
</template>

<script>
    /**
     * 树组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'tree',
        data() {
            return {
                //数据
                data: [{
                    label: '1',
                    children: [{
                        label: '1-1',
                        children: [{
                            label: '1-1-1'
                        }]
                    }]
                }, {
                    label: '2',
                    children: [{
                        label: '2-1',
                        children: [{
                            label: '2-1-1'
                        }]
                    }, {
                        label: '2-2',
                        children: [{
                            label: '2-2-1'
                        }]
                    }]
                }, {
                    label: '3',
                    children: [{
                        label: '3-1',
                        children: [{
                            label: '3-1-1'
                        }]
                    }, {
                        label: '3-2',
                        children: [{
                            label: '3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            /**
             * 点击节点触发
             *
             * @param data
             */
            handleNodeClick(data) {
                console.log(data);
            }
        }
    }
</script>

<style scoped>

</style>