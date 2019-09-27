<template>
    <section>
        <el-calendar v-model="value">
            <template
                    slot="dateCell"
                    slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
                    {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                </p>
            </template>
        </el-calendar>
    </section>
</template>

<script>
    /**
     * 日历组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'Calendar',
        data() {
            return {
                //绑定数据
                value: new Date()
            }
        }
    }
</script>

<style scoped>
    .is-selected {
        color: #1989FA;
    }
</style>