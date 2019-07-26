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
    data() {
        return {
            page: []
        }
    },

    components: {
        PageContent,
        PageHeader,
        PageFooter
    },

    async mounted() {
        let page = this.$route.params.page;
        let response = await this.axios.get(QURAN_PAGE_API({page}));
        this.page = response.data.data;
    }
}
</script>

