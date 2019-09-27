<template>
    <section>
        <!-- closable	是否可关闭
        disable-transitions	是否禁用渐变动画\
        hit	是否有边框描边
        -->
        <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                type="success"
                hit
                :disable-transitions="false"
                @close="handleClose(tag)">
            {{tag}}
        </el-tag>
        <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">添加</el-button>
    </section>
</template>

<script>
    /**
     * 标签组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'tag',
        data() {
            return {
                //标签数据
                dynamicTags: ['张三', '李四'],
                //是否显示输入框
                inputVisible: false,
                //新增标签内容
                inputValue: ''
            };
        },
        methods: {
            /**
             * 删除标签
             *
             * @param tag
             */
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            /**
             * 新增标签
             *
             */
            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            /**
             * 失去焦点或者按下回车时触发新增
             *
             */
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
    }
</script>

<style scoped>
    .el-tag + .el-tag {
        margin-left: 10px;
    }

    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>