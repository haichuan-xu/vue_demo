<template>
    <section>
        <el-button type="text" @click="table = true">打开嵌套表格的 Drawer</el-button>
        <el-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</el-button>
        <el-drawer
                title="我嵌套了表格!"
                :visible.sync="table"
                direction="rtl"
                size="50%">
            <el-table :data="gridData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
        </el-drawer>

        <el-drawer
                title="我嵌套了 Form !"
                :before-close="handleClose"
                :visible.sync="dialog"
                direction="ltr"
                custom-class="demo-drawer"
                ref="drawer"
                size="50%">
            <div class="demo-drawer__content">
                <el-form :model="form">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div class="demo-drawer__footer">
                    <el-button @click="dialog = false">取 消</el-button>
                    <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中...' : '确 定' }}
                    </el-button>
                </div>
            </div>
            <el-button @click="innerDrawer = true">打开里面的!</el-button>
            <!--:append-to-body="true" Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true-->
            <el-drawer
                    title="我是里面的"
                    direction="ltr"
                    :append-to-body="true"
                    close-on-press-escape
                    :visible.sync="innerDrawer">
                <p>_(:зゝ∠)_</p>
            </el-drawer>
        </el-drawer>
    </section>
</template>

<script>
    /**
     * 抽屉组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'drawer',
        data() {
            return {
                //抽屉状态
                table: false,
                //抽屉状态
                dialog: false,
                //加载状态
                loading: false,
                //数据
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                //表单
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                //组件宽度
                formLabelWidth: '80px',
                //抽屉状态
                drawer: false,
                //里层抽屉状态
                innerDrawer: false,
            };
        },
        methods: {
            /**
             * 表单提交
             *
             * @param done
             */
            handleClose(done) {
                this.$confirm('确定要提交表单吗？').then(_ => {
                        this.loading = true;
                        setTimeout(() => {
                            this.loading = false;
                            done();
                        }, 2000);
                    })
                    .catch(_ => {
                    });
            }
        }
    }
</script>

<style scoped>

</style>