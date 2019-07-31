<template>
    <span>
        {{ ayah.text }} ({{ ayah.number}})
    </span>
</template>

<script>
export default {
    props: ['ayah'],

    mounted() {
    }
}
</script>
