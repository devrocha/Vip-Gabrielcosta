<script setup>
defineProps({
    grades: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="grades">
        <span v-show="grades.length">Notas: </span>
        <span v-for="(element, index) in grades" :key="index">
            {{ element }}
        </span>
    </div>
</template>

<style scoped>
.grades {
    display: flex;
}

.grades>span {
    padding-right: 5px;
}
</style>