<script setup>
import { watch } from 'vue';

const emit = defineEmits(['updateModel'])

const model = defineModel()

watch(() => model.value, () => {
    emit('updateModel', `Emite o evento de dentro do InputComponent ${model.value}`)
})
</script>

<template>
    <input v-model="model">
</template>

<style></style>