<template>
    <section>
        <div class="s-steps">
            <el-steps :active="2" align-center process-status="success" finish-status="success" :space='200'>
                <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
        </div>
        <div class="s-steps" style="height: 300px">
            <el-steps direction="vertical" :active="1" simple>
                <el-step title="步骤 1" icon="el-icon-edit"></el-step>
                <el-step title="步骤 2" icon="el-icon-upload"></el-step>
                <el-step title="步骤 3" icon="el-icon-picture"></el-step>
            </el-steps>
        </div>
    </section>
</template>

<script>
    /**
     * 步骤条组件
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    export default {
        name: 'steps'
    }
</script>

<style scoped>
    .s-steps {
        margin-top: 20px;
    }
</style>