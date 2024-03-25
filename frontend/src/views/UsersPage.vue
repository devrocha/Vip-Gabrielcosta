<script setup>
import { computed, onMounted, ref } from 'vue';
import { QInput, QTable, QForm, QBtn } from 'quasar'
import { getUsers, newUser } from '@/datasource/user';

const users = ref([]);
const userName = ref();
const userAge = ref();
const userEmail = ref();
const password = ref();
const columns = computed(() => {
  return [
    {
      name: 'name',
      required: true,
      label: 'Nome',
      align: 'left',
      field: 'name',
    },
    { name: 'age', align: 'center', label: 'Idade', field: 'age', sortable: true },
    { name: 'email', align: 'center', label: 'E-mail', field: 'email', sortable: true },
    { name: 'password', align: 'center', label: 'Senha', field: 'password', sortable: true },
  ]
})

async function onSubmit(){
  const user = {
    name: userName.value,
    age: userAge.value,
    email: userEmail.value,
    password: password.value
  }

  const responseUser = await newUser(user);
  users.value.push(responseUser)
  resetForm()
}

function resetForm(){
  userName.value = ''
  userAge.value = ''
  userEmail.value = ''
  password.value = ''
}

onMounted(async () => {
  users.value = await getUsers();
})
</script>

<template>
  <div class="row">
    <QForm @submit="onSubmit" class="q-gutter-md">
      <QInput outlined v-model="userName" label="Nome" />
      <QInput outlined v-model="userAge"label="Idade" />
      <QInput outlined v-model="userEmail" label="E-mail" />
      <QInput outlined v-model="password" label="Senha" />
      <div>
        <QBtn label="Submit" type="submit" color="primary" />
      </div>
    </QForm>

  </div>
  <div class="q-pa-md">
    <QTable title="Dados" :rows="users" :columns="columns" row-key="name" />
  </div>

</template>