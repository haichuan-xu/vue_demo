<template>
    <div class="test">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="activity-img">
            <el-row class="warp" type="flex" justify="center">
                <el-col :span="24" class="warp-breadcrum">
                    <!--initial-index	初始状态激活的幻灯片的索引，从 0 开始
                        indicator-position	指示器的位置
                        type	走马灯的类型
                        loop	是否循环显示
                        direction	走马灯展示的方向-->
                    <el-carousel @change="carouselChange()" indicator-position="outside" type="card" :interval="2000"
                                 :initial-index="1" height="400px">
                        <el-carousel-item v-for="(item,index) in imagesbox" :key="index" label="--">
                            <img width="100%" :src="item.idView"/>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
        </div>
        <div class="activity-detail">
            <div class="activity-name">
                <el-collapse @change="collapseChange()" v-model="activeName" accordion>
                    <el-collapse-item title="活动标题" name="1">
                        <div>烧烤活动</div>
                    </el-collapse-item>
                    <el-collapse-item title="活动方案" name="2">
                        <span>活动时间：20**年04月30日(具体时间暂定为：14：30——00：30)</span>
                        <el-divider direction="horizontal"></el-divider>
                        <span>活动地点：*****</span>
                        <el-divider content-position="left">分割线文案</el-divider>
                        <span>活动人员：朋友20人左右</span>
                        <el-divider></el-divider>
                        <span>活动费用：自助每人缴费150元(多退少补，其中包含第二天另一景点***游玩费用)</span>
                        <el-divider></el-divider>
                        <span>活动目的：加强朋友之间的交流与学习，增进理解与沟通，努力培育协作向上的团队精神。</span>
                        <el-divider></el-divider>
                        <span>活动内容：野外自助烧烤，分团队的互动小游戏，自由活动(内容的具体形式文中将详细说明)</span>
                        <el-divider></el-divider>
                        <span>活动组织者：***、**等</span>
                        <el-divider></el-divider>
                        <span>活动要求：活动参加者请遵守相关纪律，严禁个别人脱离群体独自活动，同时必须注意安全，安全第一。</span>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <el-card class="activity-time">
                <el-timeline :reverse="reverse">
                    <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index"
                            placement="top"
                            :type="activity.type"
                            :timestamp="activity.timestamp">
                        {{activity.content}}
                    </el-timeline-item>
                </el-timeline>
            </el-card>
        </div>
    </div>
</template>


<script>
    /**
     * 轮播图&面包屑&折叠面板&时间线
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        data() {
            return {
                //图片
                imagesbox: [{id: 0, idView: require("../../assets/1.jpg")},
                    {id: 1, idView: require("../../assets/2.jpg")},
                    {id: 2, idView: require("../../assets/3.png")}],
                //排列方式
                reverse: false,
                activities: [
                    {
                        content: '准备食材',
                        timestamp: '2019-10-01 9:00',
                        type: 'success'
                    },
                    {
                        content: '开始烧烤',
                        timestamp: '2019-10-01 11:00',
                        type: 'warning'
                    },
                    {
                        content: '做游戏',
                        timestamp: '2019-10-01 13:00',
                        type: 'warning'
                    },
                    {
                        content: '收拾卫生',
                        timestamp: '2019-10-01 16:00',
                        type: 'warning'
                    }],
                activeName: ['2']
            }
        },
        methods: {
            /**
             * 轮播切换
             *
             */
            carouselChange() {
                console.log('img切换了');
            },
            /**
             * 折叠切换
             *
             */
            collapseChange() {
                console.log('折叠切换了');
            }
        },
        mounted() {
        }
    }
</script>
<style>
    .activity-name {
        margin-top: 20px;
        width: 40%;
        margin-left: 5%
    }

    .activity-img {
        margin-top: 10px;
    }

    .activity-detail {
        display: flex;
        flex-direction: row;
    }

    .activity-time {
        width: 40%;
        margin-left: 10%;
    }
</style>