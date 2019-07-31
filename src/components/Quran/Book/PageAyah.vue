<template>
    <span>
        <span> {{ ayah.text }} </span>
        <span class="green ma-2"> {{ ayah.numberInSurah}} </span>
    </span> 
</template>

<script>
export default {
    props: ['ayah']
}
</script>
