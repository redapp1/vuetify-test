<template>
    <v-btn @click="goToPage" :disabled="disabled" x-small>
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

    computed: {
        currentPage() {
            return this.$store.getters.getCurrentPage
        }, 

        disabled() {
            console.log(this.currentPage)
            return this.isNextPage && this.currentPage > 603 ||
                    !this.isNextPage && this.currentPage < 2
        }
    },

    methods: {
        goToPage() {
            let currentPageNumber = this.$store.getters.getCurrentPage;
            let nextPageNumber = this.isNextPage ? currentPageNumber + 1 : currentPageNumber - 1 
            
            this.$router.push({name: 'page', params: { page: nextPageNumber }})
        }
    }
}
</script>

