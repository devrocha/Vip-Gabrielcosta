<script setup>
import {  ref } from 'vue';

const name = ref()
const age = ref()

function newPerson() {
  const person = {
    name: name.value,
    age: age.value
  }

  console.log(person)
}
</script>

<template>
  <input type="text" placeholder="Nome" v-model="name" />
  <input type="number" placeholder="Idade" v-model="age">

  <button @click="newPerson">Cadastrar</button>
</template>
