<template>
    <div>
        ({{ ayah.number}}) {{ ayah.text }}
    </div>
</template>

<script>
export default {
    props: ['ayah'],

    mounted() {
    }
}
</script>
