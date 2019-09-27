<template>
    <section>
        <!--stroke-width	进度条的宽度，单位 px、
            text-inside	进度条显示文字内置在进度条内（只在 type=line 时可用）
            status	进度条当前状态
            color	进度条背景色（会覆盖 status 状态颜色）
            show-text	是否显示进度条文字内容-->
        <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage" :format="format"
                     :color="customColors"></el-progress>
        <div>
            <el-button-group>
                <el-button icon="el-icon-minus" @click="decrease"></el-button>
                <el-button icon="el-icon-plus" @click="increase"></el-button>
            </el-button-group>
        </div>
    </section>
</template>

<script>
    /**
     * 进度条组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'progress',
        data() {
            return {
                //进度数
                percentage: 29,
                //进度颜色
                customColors: [
                    {color: '#f56c6c', percentage: 20},
                    {color: '#e6a23c', percentage: 40},
                    {color: '#5cb87a', percentage: 60},
                    {color: '#1989fa', percentage: 80},
                    {color: '#6f7ad3', percentage: 100}
                ]
            }
        },
        methods: {
            /**
             * 进度格式化
             *
             * @param percentage
             * @returns {string}
             */
            format(percentage) {
                return percentage === 100 ? '满啦' : `${percentage}%`;
            },
            /**
             * 每次加10
             *
             */
            increase() {
                this.percentage += 10;
                if (this.percentage > 100) {
                    this.percentage = 100;
                }
            },
            /**
             * 每次减10
             *
             */
            decrease() {
                this.percentage -= 10;
                if (this.percentage < 0) {
                    this.percentage = 0;
                }
            }
        }
    }
</script>

<style scoped>

</style>