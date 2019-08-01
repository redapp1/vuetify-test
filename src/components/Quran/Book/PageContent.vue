<template>
    <div 
        :dir="isTranslated ? '' : 'rtl'" 
        class="text-justify grey lighten-1 white--text pa-4 body-2 mb-0"
    >
        <PageAyah 
            v-for="(ayah, index) in pageAyahs" 
            :ayah = ayah
            :selected = "selectedAyah == ayah.numberInSurah"
            :key="index"
            @select:ayah="selectAyah($event)"
            ></PageAyah>
    </div>
</template>

<script>
import PageAyah from './PageAyah';

export default {
    props: ['pageAyahs'],

    components: {
        PageAyah
    }, 

    methods: {
        selectAyah(ayah) {
            console.log(ayah)
            this.$store.commit('setSelectedAyah', ayah)
        }
    },

    computed: {
        isTranslated() {
            return this.$store.getters.getIstranslated
        },

        selectedAyah() {
            return this.$store.getters.getSelectedAyah
        }
    }
}
</script>
