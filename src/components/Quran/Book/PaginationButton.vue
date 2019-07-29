<template>
    <v-btn @click="goToPage">
        <template v-if="isNextPage">
            <v-icon>navigate_next</v-icon>
        </template>
        <template v-else>
            <v-icon>navigate_before</v-icon>
        </template>
    </v-btn>
</template>

<script>
export default {
    props: ['isNextPage'],

    methods: {
        goToPage() {
            let currentPageNumber = this.$store.getters.getCurrentPage;

            console.log(`current page ${currentPageNumber}`)

            let nextPageNumber = this.isNextPage ? currentPageNumber + 1 : currentPageNumber - 1 
            
            console.log(`next page ${nextPageNumber}`)
            this.$router.push({name: 'page', params: {page: nextPageNumber}})
        }
    }
}
</script>

