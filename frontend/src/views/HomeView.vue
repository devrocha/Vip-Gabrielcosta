<script setup>
import { ref } from 'vue';

const name = ref() // variavel reativa
const age = ref()
const persons = ref([])

function newPerson() {
  const person = {
    name: name.value,
    age: age.value
  }

  persons.value.push(person)
}
</script>

<template>
  <input type="text" placeholder="Nome" v-model="name" />
  <input type="number" placeholder="Idade" v-model="age">
  <button @click="newPerson">Cadastrar</button>

  <p v-for="(person, index) in persons" :key="index">
    <span :style="person.name.length > 5 ? 'color: blue;' : 'color: red;'">{{ person.name }}</span>
    <span>{{ person.age }}</span>
  </p>
</template>