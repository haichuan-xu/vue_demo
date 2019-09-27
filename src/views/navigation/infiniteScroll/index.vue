<template>
    <section>
        <div class="infinite-list-wrapper" style="overflow:auto">
            <ul
                    class="list"
                    v-infinite-scroll="load"
                    :infinite-scroll-distance="100"
                    infinite-scroll-immediate
                    infinite-scroll-disabled="disabled">
                <li v-for="i in count" class="list-item">{{ i }}</li>
            </ul>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
        </div>
    </section>
</template>

<script>
    /**
     * 无限下拉组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'infiniteScroll',
        data() {
            return {
                //每次循环次数
                count: 10,
                //状态
                loading: false
            }
        },
        computed: {
            /**
             * 数据值计算
             *
             * @returns {boolean}
             */
            noMore() {
                return this.count >= 20
            },
            /**
             * 状态计算
             *
             * @returns {boolean|default.computed.noMore|(function(): boolean)}
             */
            disabled() {
                return this.loading || this.noMore
            }
        },
        methods: {
            /**
             * 下拉加载
             *
             */
            load() {
                this.loading = true
                setTimeout(() => {
                    this.count += 2
                    this.loading = false
                }, 2000)
            }
        }
    }
</script>

<style scoped>
    .infinite-list-wrapper {
        height: 300px;
        text-align: center;
    }

    .infinite-list-wrapper .list-item + .list-item {
        margin-top: 10px;
    }

    .infinite-list-wrapper .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #fff6f6;
        color: #ff8484;
    }
</style>