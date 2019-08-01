<template>
    <span 
        :class="{'selected-ayah': selected, 'cursor-hand': true}"
        @click="$emit('select:ayah', ayah.numberInSurah)"
    >
        <span> {{ ayah.text }} </span>
        <span class="green ma-2"> {{ ayah.numberInSurah }} </span>
    </span> 
</template>

<script>
export default {
    props: ['ayah', 'selected']
}
</script>

<style scoped>
    .selected-ayah {
        background: rgb(216, 231, 223);
        color: black;
    }

    .cursor-hand {
        cursor: pointer;
    }

</style>

