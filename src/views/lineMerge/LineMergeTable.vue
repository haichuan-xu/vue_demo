<template>
    <section>
        <el-table ref="multipleTable" border :span-method="objectSpanMethod" :cell-class-name="tableRowClassName"
                  @cell-mouse-leave="cellMouseLeave" @cell-mouse-enter="cellMouseEnter" :data="tableData"
                  style="width: 80%;margin:0 auto;">
            <el-table-column label="商品类别" align="center">
                <template slot-scope="scope" width="160">
                    <div>{{scope.row.productType}}</div>
                </template>
            </el-table-column>
            <el-table-column label="商品价格" align="center">
                <template slot-scope="scope">
                    <p>{{scope.row.price}}</p>
                </template>
            </el-table-column>
            <el-table-column label="商品名称" width="180px" align="center">
                <template slot-scope="scope">
                    <p>{{scope.row.productName}}</p>
                </template>
            </el-table-column>
            <el-table-column label="操作人员" align="center">
                <template slot-scope="scope">
                    <p>{{scope.row.operator}}</p>
                </template>
            </el-table-column>
            <el-table-column prop="updateTime" label="更新时间" align="center">
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
    /**
     * 表格行合并Table
     *
     *@date 2019-09-11
     *@author liuzhuang
     */
    export default {
        name: 'LineMergeTable',
        data() {
            return {
                //表格数据
                tableData: [],
                //存放下标
                OrderIndexArr: [],
                //鼠标划过的下标
                rowIndex: '',
                //根据划过的下标找到对应数据
                hoverOrderArr: []
            }
        },
        methods: {
            /**
             * 查询
             *
             */
            queryList() {
                this.axios.get('/jsonData/table.json').then(res => {
                    this.tableData = res.data.list;
                    this.getOrderNumber();
                })
            },
            /**
             * 初始化table数据
             *
             */
            initTable() {
                this.queryList();
            },
            /**
             * 处理数据
             *
             */
            getOrderNumber() {
                let OrderObj = {}
                //遍历数据
                this.tableData.forEach((element, index) => {
                    //向element中添加rowIndex属性，属性值为下标
                    element.rowIndex = index;
                    //判断对象中是否有此属性的值，相同operate_number的放在同一属性的数组中
                    if (OrderObj[element.operate_number]) {
                        OrderObj[element.operate_number].push(index)
                    } else {
                        OrderObj[element.operate_number] = []
                        OrderObj[element.operate_number].push(index)
                    }
                })
                // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）数组下标
                for (let k in OrderObj) {
                    if (OrderObj[k].length > 1) {
                        this.OrderIndexArr.push(OrderObj[k])
                    }
                }
            },
            /**
             * 合并单元格
             *
             * @param row
             * @param column
             * @param rowIndex
             * @param columnIndex
             * @returns {*}
             */
            objectSpanMethod({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0 || columnIndex === 3 || columnIndex === 4) {
                    for (let i = 0; i < this.OrderIndexArr.length; i++) {
                        let element = this.OrderIndexArr[i]
                        for (let j = 0; j < element.length; j++) {
                            let item = element[j]
                            if (rowIndex == item) {
                                if (j == 0) {
                                    return {
                                        rowspan: element.length,
                                        colspan: 1
                                    }
                                } else if (j != 0) {
                                    return {
                                        rowspan: 0,
                                        colspan: 0
                                    }
                                }
                            }
                        }
                    }
                }
            },
            /**
             * 动态添加单元格样式
             *
             * @param row
             * @param rowIndex
             * @returns {string}
             */
            tableRowClassName({row, rowIndex}) {
                let arr = this.hoverOrderArr
                for (let i = 0; i < arr.length; i++) {
                    if (rowIndex == arr[i]) {
                        return 'hovered-row'
                    }
                }
            },
            /**
             * 鼠标划入
             *
             * @param row
             * @param column
             * @param cell
             * @param event
             */
            cellMouseEnter(row, column, cell, event) {
                //获取鼠标划入的下标
                this.rowIndex = row.rowIndex;
                //初始化数组
                this.hoverOrderArr = [];
                this.OrderIndexArr.forEach(element => {
                    if (element.indexOf(this.rowIndex) >= 0) {
                        this.hoverOrderArr = element
                    }
                })
            },
            /**
             * 鼠标移出
             *
             * @param row
             * @param column
             * @param cell
             * @param event
             */
            cellMouseLeave(row, column, cell, event) {
                this.rowIndex = '-1'
                this.hoverOrderArr = [];
            },
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>