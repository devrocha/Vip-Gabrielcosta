<script setup>
import { ref } from 'vue';

const grade = ref();
const grades = ref([]);
const bestGradeStudent = ref();
const worstGradeStudent = ref();
const average = ref();
const gradeSum = ref(0);

function newGrade() {
  grades.value.push(grade.value)
  gradeSum.value += grade.value

  bestGrade();
  worstGrade();
  averageGrade();
}

function bestGrade(){
  bestGradeStudent.value = Math.max(...grades.value) 
}

function worstGrade(){
  worstGradeStudent.value = Math.min(...grades.value)
}

function averageGrade(){
  average.value = gradeSum.value/grades.value.length
}

function studentSituation(){
  if(average.value <= 4)
    
}

</script>
<template>
  <input type="number" placeholder="Nota" v-model="grade">
  <button @click="newGrade">Cadastrar</button>

  <p v-for="(element, index) in grades" :key="index">
    <span>{{ element }}</span>
  </p>
  <p>Melhor nota: {{ bestGradeStudent }}</p>
  <p>Pior nota: {{ worstGradeStudent }}</p>
  <p>Média: {{ average }}</p>
  <p>
    Situação do aluno: 
    <span></span>
  </p>
</template>
