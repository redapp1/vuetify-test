<template>
    <div>
        <template v-if="page">
            <v-card class="mt-5">
                <v-card-title>
                    <PageHeader :pageNumber="page.number"/>
                </v-card-title>
                <v-card-text>
                    <PageContent :pageAyahs="page.ayahs"/>
                </v-card-text>
                <v-card-actions>
                    <PageFooter :pageNumber="page.number"/>
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
    props: ['pageNumber'],
    components: {
        PageContent,
        PageHeader,
        PageFooter
    },

    computed: {
        page() {
            return this.$store.state.page
        }
    },

    async mounted() {
        this.$store.dispatch('getQuranPage', this.pageNumber)
    }
}
</script>

