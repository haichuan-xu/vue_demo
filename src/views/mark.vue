<template>
  <section>
    <el-table border :data="imageData" style="width: 80%;margin:0 auto;">
      <el-table-column label="姓名" align="center">
        <template slot-scope="scope" width="160">
          <div>{{scope.row.name}}</div>
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.age}}</p>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="180px" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.sex}}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            :disabled="scope.$index===0"
            @click="moveUp(scope.$index,scope.row)"
          >
            <i class="el-icon-arrow-up"></i>
          </el-button>
          <el-button
            size="mini"
            :disabled="scope.$index===(imageData.length-1)"
            @click="moveDown(scope.$index,scope.row)"
          >
            <i class="el-icon-arrow-down"></i>
          </el-button>
          <el-button size="mini" type="danger" v-has @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script>
/**
 * 行移动table
 *
 *@date 2019-09-11
 *@author liuzhuang
 */
export default {
  name: "LineMovingTable",
  data() {
    return {
      imageData: []
    };
  },
  created: function() {
    console.group("created 创建完毕状态===============》");
     this.axios.post('/api/college/getCollegeList',{currentPage:1,pageSize:10}).then(res=>{
          console.log(res);
     }
     )
   
  },
  methods: {
    /**
     * 查询
     *
     */
    queryList() {
      this.axios.get("/jsonData/table2.json").then(res => {
        this.imageData = res.data.list;
      });
    },
    /**
     * 初始化table数据
     *
     */
    initTable() {
      this.queryList();
    },
    /**
     * 向上移动
     *
     * @param index
     * @param row
     */
    moveUp(index, row) {
      //判断是否是第一条
      if (index == 0) {
        this.$message.warning("已经是第一条，不可上移");
        return false;
      }

      //获取点击的上一条数据
      let upData = this.imageData[index - 1];
      //删除点击的上一条数据
      this.imageData.splice(index - 1, 1);
      //将删除的插入到点击的位置
      this.imageData.splice(index, 0, upData);
    },
    /**
     * 向下移动
     *
     * @param index
     * @param row
     * @returns {boolean}
     */
    moveDown(index, row) {
      //判断是否是最后一条
      if (index + 1 == this.imageData.length) {
        this.$message.warning("已经是最后一条，不可下移");
        return false;
      }
      //获取到点击的下一条数据
      let downData = this.imageData[index + 1];
      //删除点击的吓一跳数据
      this.imageData.splice(index + 1, 1);
      //将删除的数据插入到点击的位置
      this.imageData.splice(index, 0, downData);
    },
    /**
     * 删除操作
     *
     * @param row
     */
    handleDelete(row) {
      this.$message.success("暂无此功能！");
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>