<template>
    <div>
        <PageHeader :pageNumber="page.number"/>
        <PageContent :pageAyahs="page.ayahs"/>
        <PageFooter :pageNumber="page.number"/>
    </div>
</template>

<script>
import PageContent from './PageContent';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

import { QURAN_PAGE_API } from '../../../../config/config';

export default {
    components: {
        PageContent,
        PageHeader,
        PageFooter
    },

    computed: {
        page() {
            this.$store.state.page
        }
    },

    async mounted() {
        this.$store.dispatch('getQuranPage')
    }
}
</script>

