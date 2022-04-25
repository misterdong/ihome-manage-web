<template>
  <div class="app-container">
    <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="照片选择" name="1">
      <div style="height: 20vh;">
      <step-1></step-1>
    </div>
  </el-collapse-item>
  <el-collapse-item title="参数选择" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="地图" name="3">

  <baidu-map class="bm-view" ak="sd3quC1PqgzA6APyNe71NQBIA9LYv3zR">
  </baidu-map>

  </el-collapse-item>
</el-collapse>
<el-form>
<el-form-item>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确定
    </el-button>
    <el-button @click="cancel" size="mini">取消</el-button>
</el-form-item>
</el-form>
  </div>
</template>

<script>
import path from 'path'
import { deepClone } from '@/utils'
import { getRoutes, getRoles, addRole, deleteRole, updateRole } from '@/api/role'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

import {listPhotos } from '@/api/photo'

import step1 from './step/step1.vue'
import step2 from './step/step2.vue'
import step3 from './step/step3.vue'

export default {
  components: { step1, step2,BaiduMap},
  data() {
    return {
      activeName: 1,
    }
  },
  computed: {

  },
  created() {


  },
  methods: {
    cancel(){

    },
    submitUpload(){

    }

   
       
   // generateTree(routes, basePath = '/', checkedKeys) {
    //   const res = []

    //   for (const route of routes) {
    //     const routePath = path.resolve(basePath, route.path)

    //     // recursive child routes
    //     if (route.children) {
    //       route.children = this.generateTree(route.children, routePath, checkedKeys)
    //     }

    //     if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
    //       res.push(route)
    //     }
    //   }
    //   return res
    // }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
