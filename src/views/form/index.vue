<template>
    <section>
        <el-page-header content="发布活动">
        </el-page-header>
        <div class="f-form">
            <!--:inline="true" 可以让表单域变为行内的表单域
                label-suffix   表单域标签的后缀
                hide-required-asterisk 是否显示必填字段的标签旁边的红色星号
                show-message 是否显示校验错误信息
                inline-message	是否以行内形式展示校验信息
                status-icon	是否在输入框中显示校验结果反馈图标
                validate-on-rule-change	是否在 rules 属性改变后立即触发一次验证-->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
                     label-suffix=":" :status-icon="true">
                <el-form-item label="活动名称" prop="name">
                    <!-- show-word-limit	是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效
                         show-password	是否显示切换密码图标
                         prefix-icon	输入框头部图标
                         suffix-icon	输入框尾部图标-->
                    <el-input type="text" placeholder="请输入活动名称" :maxlength="1000" v-model="ruleForm.name"
                              @blur="inputBlur()" clearable show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                    <!--multiple 多选
                        collapse-tags	多选时是否将选中值按文字的形式展示
                        multiple-limit	多选时用户最多可以选择的项目数，为 0 则不限制
                        filterable	是否可搜索-->
                    <el-select v-model="ruleForm.region" clearable multiple filterable collapse-tags
                               placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动人数">
                    <el-input-number size="mini" :min="1" :max="20" :step="2"
                                     v-model="ruleForm.number"></el-input-number>
                </el-form-item>
                <el-form-item label="是否组团">
                    <el-switch
                            v-model="ruleForm.team"
                            active-text="是"
                            active-color="#000000"
                            inactive-color="#90EE90"
                            inactive-text="否"
                            :width="100">
                    </el-switch>
                </el-form-item>
                <el-form-item label="进度">
                    <!--改变step的值可以改变步长，通过设置show-stops属性可以显示间断点
                        show-input	是否显示输入框，仅在非范围选择时有效
                        show-input-controls	在显示输入框的情况下，是否显示输入框的控制按钮
                        show-tooltip	是否显示 tooltip(提示值)
                        format-tooltip	格式化 tooltip message
                        range	是否为范围选择
                        vertical	是否竖向模式-->
                    <el-slider :step="10" v-model="ruleForm.sliderNum" show-stops show-input></el-slider>
                </el-form-item>
                <el-form-item label="活动时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                            format="yyyy 年 MM 月 dd 日"
                                            style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2"
                                            style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="活动性质" prop="type">
                    <!--min	可被勾选的 checkbox 的最小数量
                        max	可被勾选的 checkbox 的最大数量
                        text-color	按钮形式的 Checkbox 激活时的文本颜色
                        fill	按钮形式的 Checkbox 激活时的填充色和边框色-->
                    <el-checkbox-group v-model="ruleForm.type" text-color="#000000" fill="#90EE90">
                        <el-checkbox-button label="室内" name="type" size="mini" border></el-checkbox-button>
                        <el-checkbox-button label="户外" name="type" size="mini" border></el-checkbox-button>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="活动主题颜色">
                    <!--show-alpha	是否支持透明度选择
                        color-format 写入 v-model 的颜色的格式-->
                    <el-color-picker v-model="ruleForm.color" show-alpha></el-color-picker>
                </el-form-item>
                <el-form-item label="特殊资源" prop="resource">
                    <!--text-color	按钮形式的 Radio 激活时的文本颜色-->
                    <!--fill	按钮形式的 Radio 激活时的填充色和边框色-->
                    <el-radio-group text-color="#000000" fill="#90EE90" v-model="ruleForm.resource"
                                    @change="radioChange(ruleForm.resource)">
                        <el-radio-button label="收费" border></el-radio-button>
                        <el-radio-button label="免费" border></el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </section>
</template>

<script>
    /**
     * form表单
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'formList',
        data() {
            return {
                //对齐方式
                labelPosition: 'right',
                //表单数据
                ruleForm: {
                    color: '#409EFF',
                    name: '',
                    region: '',
                    number: 1,
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    desc: '',
                    team: true,
                    sliderNum: 20
                },
                //表单校验
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    region: [
                        {required: true, message: '请选择活动区域', trigger: 'change'}
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    date2: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    type: [
                        {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
                    ],
                    resource: [
                        {required: true, message: '请选择活动资源', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: '请填写活动形式', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            /**
             * 重置
             *
             * @param formName
             */
            resetForm(formName) {
                //clearValidate移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
                //对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
                this.$refs[formName].resetFields();
            },
            /**
             * radio-Grop的change方法
             *
             * @param val
             */
            radioChange(val) {
                this.$message.success(val);
            },
            /**
             * 输入框失去焦点
             *
             */
            inputBlur() {
                this.$message.success('输入框失去焦点');
            },
            /**
             * 提交表单
             *
             * @param formName
             */
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.ruleForm);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .f-form {
        width: 60%;
        margin-left: 10%;
    }
</style>