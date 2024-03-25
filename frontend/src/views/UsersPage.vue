<script setup>
import { onMounted, ref } from 'vue';
import { QInput } from 'quasar'
import { getUsers } from '@/datasource/user';

 const users = ref([]);
 onMounted(async ()=>{
  users.value = await getUsers();
 })
</script>

<template>
  <div class="row">
    <div>
      {{ users }}
      <QInput outlined label="Standard"/>
      <QInput outlined label="Standard"/>
    </div>
  </div>
  
</template>