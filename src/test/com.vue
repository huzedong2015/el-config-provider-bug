<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" append-to-body>
    <h1>新组件</h1>
    <el-select></el-select>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dialogVisible = ref(true);
</script>
