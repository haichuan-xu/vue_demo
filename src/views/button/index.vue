<template>
    <section>
        <el-form label-width="80px">
            <el-form-item label="按钮:">
                <!--gutter  栅格之间的间隔-->
                <el-row :gutter="20" type="flex" justify="space-around">
                    <!--push 向右移动格数-->
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <div class="grid-content bg-purple">
                            <el-button>默认按钮</el-button>
                        </div>
                    </el-col>
                    <!--pull 向左移动格数-->
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <div class="grid-content bg-purple">
                            <el-button type="primary" @click="openFullScreen"
                                       v-loading.fullscreen.lock="fullscreenLoading">弹出loading
                            </el-button>
                        </div>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <div class="grid-content bg-purple">
                            <el-button type="success" @click="openMessage()" plain>弹出message</el-button>
                        </div>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <div class="grid-content bg-purple">
                            <el-button type="info" @click="openMessageBox()" round>弹出messaageBox</el-button>
                        </div>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <div class="grid-content bg-purple">
                            <el-button type="warning" :autofocus="true" @click="openNotice()">弹出notification</el-button>
                        </div>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <div class="grid-content bg-purple">
                            <el-button type="danger" loading>危险按钮</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="文字链接:">
                <el-row type="flex" justify="space-around" class="links">
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <!--target="_blank" 在新窗口打开链接-->
                        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-link type="primary" :underline="false">主要链接</el-link>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-link type="success" disabled>成功链接</el-link>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-link type="warning">警告链接</el-link>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-link type="danger">危险链接</el-link>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-link type="info">信息链接</el-link>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-link icon="el-icon-edit">编辑</el-link>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="dialog:">
                <el-button type="primary" @click="dialogVisible = true">点击打开 Dialog</el-button>
            </el-form-item>
            <el-form-item label="tooltip:">
                <el-row type="flex" justify="start" class="links">
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <!--offset 偏移量
                            open-delay 延迟时间
                            enterable  是否可进入tooltip-->
                        <el-tooltip :offset="22" :open-delay="1000" :enterable="false" content="Bottom center"
                                    placement="bottom" effect="light">
                            <el-button>Light</el-button>
                        </el-tooltip>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-tooltip :offset="22" :open-delay="1000" :enterable="false" content="Bottom center"
                                    placement="bottom" effect="dark">
                            <el-button>dark</el-button>
                        </el-tooltip>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="popover:">
                <el-row type="flex" justify="start" class="links">
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <!--visible-arrow 是否显示箭头-->
                        <el-popover
                                placement="bottom"
                                :offset="200"
                                :visible-arrow="false"
                                title="标题"
                                :show="showPopover()"
                                :after-enter="afterShowPopover()"
                                :hide="hidePopover()"
                                :after-leave="afterHidePopover"
                                width="200"
                                trigger="click"
                                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                            <el-button slot="reference">click</el-button>
                        </el-popover>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-popover
                                placement="top"
                                width="160"
                                v-model="visible">
                            <p>这是一段内容这是一段内容确定删除吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                            </div>
                            <el-button slot="reference">删除</el-button>
                        </el-popover>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="Rate:">
                <el-row type="flex" justify="start" class="links">
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-rate v-model="rateValue" allow-half></el-rate>
                    </el-col>
                    <el-col :span="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                        <el-rate v-model="rateValue" show-text></el-rate>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                        <el-rate
                                v-model="rateValue"
                                :colors="colors">
                        </el-rate>
                    </el-col>
                    <el-col :span="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                        <el-rate
                                v-model="rateValue"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="cascader:">
                <el-row type="flex" justify="start" class="links">
                    <el-col :span="5" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-cascader :props="props" :options="options" clearable></el-cascader>
                    </el-col>
                    <el-col :span="5" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-cascader collapse-tags :props="props" :options="options"
                                     :show-all-levels="false"></el-cascader>
                    </el-col>
                    <el-col :span="5" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-cascader :options="options" :props="{ checkStrictly: true }" clearable></el-cascader>
                    </el-col>
                    <el-col :span="5" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-cascader :options="options" :props="{ multiple: true, checkStrictly: true }" clearable
                                     filterable></el-cascader>
                    </el-col>
                    <el-col :span="5" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-cascader :options="options">
                            <template slot-scope="{ node, data }">
                                <span>{{ data.label }}</span>
                                <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
                            </template>
                        </el-cascader>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="upload">
                <el-row type="flex" justify="start" class="links">
                    <el-col :span="5" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-upload
                                :data="dataObj"
                                :file-list="fileList"
                                :before-upload="beforeUpload"
                                :on-remove="handleRemove"
                                :on-success="handleUploadSuccess"
                                :on-preview="handlePreview"
                                :limit="maxCount"
                                :on-exceed="handleExceed"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                drag
                                list-type="picture-card"
                        >
                            <i class="el-icon-plus"/>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible2">
                            <img :src="dialogImageUrl" width="100%" alt="">
                        </el-dialog>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="transfer">
                <el-row type="flex" justify="start">
                    <el-col :span="10" :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                        <el-transfer
                                :titles="['张三','李四']"
                                :button-texts="['go','come']"
                                @change="transferChange"
                                @left-check-change="leftChange"
                                @right-check-change="rightChange"
                                filterable
                                :filter-method="filterMethod"
                                filter-placeholder="请输入城市拼音"
                                v-model="value2"
                                :data="data">
                        </el-transfer>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
        <!--  fullscreen 全屏      -->
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                fullscreen
                :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </section>
</template>

<script>
    /**
     * 小组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'buttonList',
        data() {
            const generateData = _ => {
                const data = [];
                const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
                const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
                cities.forEach((city, index) => {
                    data.push({
                        label: city,
                        key: index,
                        pinyin: pinyin[index]
                    });
                });
                return data;
            };
            return {
                data: generateData(),
                value2: [],
                filterMethod(query, item) {
                    return item.pinyin.indexOf(query) > -1;
                },
                //loading状态
                fullscreenLoading: false,
                //模态框开关
                dialogVisible: false,
                //是否显示箭头
                visible: false,
                //等级
                rateValue: 1,
                //颜色
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                //图标
                iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],
                //多选
                props: {multiple: true},
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                        }, {
                            value: 'color',
                            label: 'Color 色彩'
                        }, {
                            value: 'typography',
                            label: 'Typography 字体'
                        }, {
                            value: 'icon',
                            label: 'Icon 图标'
                        }, {
                            value: 'button',
                            label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        }, {
                            value: 'input',
                            label: 'Input 输入框'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        }, {
                            value: 'select',
                            label: 'Select 选择器'
                        }, {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        }, {
                            value: 'switch',
                            label: 'Switch 开关'
                        }, {
                            value: 'slider',
                            label: 'Slider 滑块'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        }, {
                            value: 'upload',
                            label: 'Upload 上传'
                        }, {
                            value: 'rate',
                            label: 'Rate 评分'
                        }, {
                            value: 'form',
                            label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格'
                        }, {
                            value: 'tag',
                            label: 'Tag 标签'
                        }, {
                            value: 'progress',
                            label: 'Progress 进度条'
                        }, {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        }, {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        }, {
                            value: 'badge',
                            label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert 警告'
                        }, {
                            value: 'loading',
                            label: 'Loading 加载'
                        }, {
                            value: 'message',
                            label: 'Message 消息提示'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        }, {
                            value: 'notification',
                            label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        }, {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        }, {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }, {
                            value: 'card',
                            label: 'Card 卡片'
                        }, {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        }, {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }]
                    }]
                }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],
                //上传携带的额外参数
                dataObj: {type: 1},
                //预览模态框
                dialogVisible2: false,
                //预览图
                dialogImageUrl: null,
                //存放上传图片
                value: [],
                //最大上传数
                maxCount: 5
            }
        },
        computed: {
            //上传列表
            fileList() {
                const fileList = []
                for (let i = 0; i < this.value.length; i++) {
                    fileList.push({url: this.value[i]})
                }
                return fileList
            }
        },
        methods: {
            /**
             * 弹出loading
             *
             */
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 2000);
            },
            /**
             * 弹出Message
             *
             */
            openMessage() {
                this.$message({
                    center: true,
                    showClose: true,
                    dangerouslyUseHTMLString: true,
                    message: '<strong>这是 <i>HTML</i> 片段</strong>'
                });
            },
            /**
             * 弹出MessageBox
             *
             */
            openMessageBox() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            /**
             * 关闭确认
             *
             * @param done
             */
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            /**
             * 弹出notice
             *
             */
            openNotice() {
                this.$notify.info({
                    title: '消息',
                    message: '这是一条消息的提示消息'
                });
            },
            /**
             * 显示时popover回调
             *
             */
            showPopover() {
                console.log('show popover');
            },
            /**
             * 显示动画完触发
             *
             */
            afterShowPopover() {
                console.log('after show popover');
            },
            /**
             * 隐藏时触发
             *
             */
            hidePopover() {
                console.log('hide Popover');
            },
            /**
             * 隐藏动画完毕后触发
             *
             */
            afterHidePopover() {
                console.log('after hide Popover');
            },
            /**
             * 上传数量回调
             *
             * @param files
             * @param fileList
             */
            handleExceed(files, fileList) {
                this.$message({
                    message: '最多只能上传' + this.maxCount + '张图片',
                    type: 'warning',
                    duration: 1000
                });
            },
            /**
             * 上传成功回调
             *
             * @param res
             * @param file
             * @param filelist
             */
            handleUploadSuccess(res, file, filelist) {
                this.fileList.push({name: file.name, url: file.response});
                console.log('success');
            },
            /**
             * 上传前校验
             *
             * @param file
             * @returns {boolean}
             */
            beforeUpload(file) {
                const isLt3M = file.size / 1024 / 1024 < 3;

                if (!isLt3M) {
                    this.$message.error('上传图片大小不能超过 3MB!');
                }
                return isLt3M;
            },
            /**
             * 预览
             *
             * @param file
             */
            handlePreview(file) {
                this.dialogVisible2 = true;
                this.dialogImageUrl = file.url;
            },
            /**
             * 删除
             *
             * @param file
             * @param fileList
             */
            handleRemove(file, fileList) {
                this.emitInput(fileList);
            },
            /**
             * 穿梭框右侧数据变化
             *
             */
            transferChange(val) {
                console.log(val)
            },
            /**
             * 穿梭框左侧点击
             *
             */
            leftChange(val) {
                console.log(val)
            },
            /**
             * 穿梭框右侧点击
             *
             */
            rightChange(val) {
                console.log(val)
            }
        }
    }
</script>

<style scoped>
    .bg-purple {
        background: #d3dce6;
    }

    .grid-content {
        text-align: center;
        border-radius: 4px;
        height: auto;
    }

    .links {
        text-align: center
    }
</style>