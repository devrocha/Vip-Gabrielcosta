<script setup>
import { RouterView } from 'vue-router'
import { getUsers } from './datasource/user';
import { onMounted } from 'vue';

onMounted(async()=>{
  await getUsers();
})

</script>

<template>
  <RouterView />
</template>