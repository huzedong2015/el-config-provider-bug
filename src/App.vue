<template>
  <el-config-provider :locale="zhCn">
    <el-select></el-select>

    <el-button @click="addComponentToBody">点击这里</el-button>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { addComponentToBody } from "./test";

</script>
