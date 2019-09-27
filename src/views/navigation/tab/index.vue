<template>
    <section>
        <div class="t-tab">
            <el-tabs v-model="activeName" :tab-position="tabPosition" type="border-card" @tab-click="handleClick">
                <el-tab-pane name="first"><span slot="label"><i class="el-icon-date"></i> 用户管理</span>用户管理</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
        <div class="t-tab">
            <el-tabs v-model="activeName" :tab-position="tabPosition2" type="card" @tab-click="handleClick">
                <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
        <div class="t-tab">
            <div style="margin-bottom: 20px;">
                <el-button size="small" @click="addTab(editableTabsValue)">add tab</el-button>
            </div>
            <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
                <el-tab-pane
                        v-for="(item, index) in editableTabs"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name">
                    {{item.content}}
                </el-tab-pane>
            </el-tabs>
        </div>
    </section>
</template>

<script>
    /**
     * 标签页组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'tab',
        data() {
            return {
                //当前选中
                activeName: 'second',
                //标签位置
                tabPosition: 'top',
                //标签位置
                tabPosition2: 'bottom',
                //标签位置
                editableTabsValue: '2',
                //标签数据
                editableTabs: [{
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                }, {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                }],
                //当前tab数量
                tabIndex: 2
            };
        },
        methods: {
            /**
             * 添加tab
             *
             * @param targetName
             */
            addTab(targetName) {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue = newTabName;
            },
            /**
             * 删除tab
             *
             * @param targetName
             */
            removeTab(targetName) {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }
                this.editableTabsValue = activeName;
                this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            },
            /**
             * 点击tab页
             *
             * @param tab
             * @param event
             */
            handleClick(tab, event) {
                console.log(tab, event);
            },
        }
    }
</script>

<style scoped>
    .t-tab {
        margin-top: 20px;
    }
</style>