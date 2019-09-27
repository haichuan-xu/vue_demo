<template>
    <section>
        <nav class="header-bar">
            <div class="header-bar-container">
                <img src="../assets/logo.png" alt="" class="logo">
            </div>
        </nav>
        <div class="f-fr g-logout">
            <el-link type="success" class="g-user-name" @click="goUserDetail()">{{userName}}</el-link>
            <el-button type="danger" @click="logout()">退出</el-button>
        </div>
        <img src="../assets/logo.jpg" alt="" class="user-img">
    </section>
</template>
<script>
    /**
     * 头部组件
     *
     *@date 2019-09-13
     *@author liuzhuang
     */
    // 引入Vuex
    // import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: 'TheHeader',
        data() {
            return {
                userName: 'lz'
            }
        },
        methods: {
            /**
             * 登出
             *
             */
            logout() {

                this.$confirm('此操作将退出系统, 是否继续?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.$message.success('登出成功！')
                    // this.$localStorage.clear();
                    // window.location.href = '/';
                    // this.clearView();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },

            /**
             * 去用户详情
             *
             */
            goUserDetail() {
                this.$message.success('哈哈哈');
            },
        },
        mounted() {
        }
    }
</script>
<style scoped lang="scss">
    .header-bar {
        width: 200px;
        display: inline;
        z-index: 1030;
        height: 60px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .08);

        .header-bar-container {
            position: relative;
            float: left;
            width: 200px;
            height: 60px;
            overflow: hidden;

            .logo {
                width: 60px;
                height: 60px;
                margin-left: 10px;
            }
        }
    }

    .g-logout {
        line-height: 60px;
        margin-right: 30px;

        .g-user-name {
            margin-right: 30px;
        }
    }

    .user-img {
        margin-top: 5px;
        margin-right: 20px;
        float: right;
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }

    .f-fr {
        float: right;
    }

</style>
