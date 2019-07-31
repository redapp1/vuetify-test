<template>
    <div>
        <template v-if="page">
            <v-card>
                <v-card-title>
                    <PageHeader :page="page"/>
                </v-card-title>
                <v-card-text>
                    <PageContent :pageAyahs="page.ayahs"/>
                </v-card-text>
                <v-card-actions>
                    <PageFooter :page="page"/>
                </v-card-actions>     
            </v-card>
        </template>
        <template v-else>
            empty page
        </template>
    </div>
</template>

<script>
import PageContent from './PageContent';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

import { QURAN_PAGE_API } from '../../../../config/config';

export default {
    props: ['pageNumber', 'edition'],
    components: {
        PageContent,
        PageHeader,
        PageFooter
    },

    computed: {
        page() {
            if (this.edition) {
                return this.$store.getters.getTranslatedPage
            }  
            return this.$store.state.page
        }
    },

    async mounted() {
        this.$store.dispatch('getQuranPage', { 
            page: this.pageNumber,
            edition: this.edition
        }) 
    }
}
</script>

<style scoped>

</style>


