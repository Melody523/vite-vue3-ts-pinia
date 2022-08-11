<template>
  <h1>测试 vueUse 的鼠标坐标</h1>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
</template>

<script>
import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';
import request from '@/utils/axios';
import API from '@/api';

export default defineComponent({
  name: 'VueUse',
  setup() {
    const { x, y } = useMouse();
    const requestRes = async () => {
      let result = await request({
        url: '/api/mobileWeb/catalogs',
        method: 'get',
      });
      const requestRes = async () => {
        let result = await API.getCatalogs();
      }
      requestRes()
    };
    requestRes()
    return {
      x,
      y,
    };
  },
});
</script>

<style>
</style>