<script setup>
import { computed, ref } from 'vue';

const grade = ref();
const grades = ref([]);
const gradeSum = ref(0);

const situation = ref('')
const className = ref()

function newGrade() {
  if (grade.value < 0 || grade.value > 10) {
    return alert('A notas deve estar entre 0 e 10')
  }

  grades.value.push(grade.value)
  gradeSum.value += grade.value

  studentSituation();
}

const bestGrade = computed(() => grades.value.length ? Math.max(...grades.value) : '')

const worstGrade = computed(() => grades.value.length ? Math.min(...grades.value) : '')

const averageGrade = computed(() => grades.value.length ? gradeSum.value / grades.value.length : '')

function studentSituation() {
  if (averageGrade.value < 4) {
    situation.value = 'Reprovado'
    className.value = 'faildClass'
    return
  }

  if (averageGrade.value >= 4 && averageGrade.value < 7) {
    situation.value = 'Recuperação'
    className.value = 'helpNeededClass'
    return
  }

  situation.value = 'Aprovado'
  className.value = 'approvedClass'
}

</script>
<template>
  <input type="number" placeholder="Nota" v-model="grade">
  <button @click="newGrade">Cadastrar</button>

  <div class="grades">
    <span v-show="grades.length">Notas: </span>
    <span v-for="(element, index) in grades" :key="index">
      {{ element }}
    </span>
  </div>
  <div v-show="grades.length">
    <p>Melhor nota: {{ bestGrade }}</p>
    <p>Pior nota: {{ worstGrade }}</p>
    <p>Média: {{ averageGrade }}</p>
    <p>
      Situação do aluno:
      <span :class="className">{{ situation }}</span>
    </p>
  </div>
</template>

<style>
.grades {
  display: flex;
}

.grades>span {
  padding-right: 5px;
}

.faildClass {
  color: red;
}

.helpNeededClass {
  color: purple;
}

.approvedClass {
  color: green;
}
</style>
