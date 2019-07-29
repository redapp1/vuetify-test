<template>
    <div>
        <template v-if="page">
            <PageHeader :pageNumber="page.number"/>
            <PageContent :pageAyahs="page.ayahs"/>
            <PageFooter :pageNumber="page.number"/>
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

