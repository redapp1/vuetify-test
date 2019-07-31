<template>
    <div :dir="isTranslated ? '' : 'rtl'">
        <PageAyah 
            v-for="(ayah, index) in pageAyahs" 
            :ayah = ayah
            :key="index">
        </PageAyah>
    </div>
</template>

<script>
import PageAyah from './PageAyah';

export default {
    props: ['pageAyahs'],

    components: {
        PageAyah
    }, 

    computed: {
        isTranslated() {
            return this.$store.getters.getIstranslated
        }
    }
}
</script>
