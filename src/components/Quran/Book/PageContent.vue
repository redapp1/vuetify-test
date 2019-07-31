<template>
    <div 
        :dir="isTranslated ? '' : 'rtl'" 
        class="text-justify grey lighten-1 white--text pa-4 body-2 mb-0"
    >
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
