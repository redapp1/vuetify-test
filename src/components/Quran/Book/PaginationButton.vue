<template>
    <v-btn 
        text 
        @click="goToPage" 
        :disabled="disabled" 
    >
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
            return this.isNextPage && this.currentPage > 603 ||
                    !this.isNextPage && this.currentPage < 2
        },

        currentEdition() {
            return this.$store.getters.getCurrentEdition
        },

        isTranslated() {
            return this.$store.getters.getIstranslated
        }
    },

    methods: {
        goToPage() {
            let currentPageNumber = this.$store.getters.getCurrentPage;
            let nextPageNumber = this.isNextPage ? currentPageNumber + 1 
                                    : currentPageNumber - 1 
            if (this.isTranslated) {
                this.$router.push(
                    {   
                        name: 'translation', 
                        params: { page: nextPageNumber, edition: this.currentEdition }
                    })
            } else {
                this.$router.push({name: 'page', params: { page: nextPageNumber }})
            }
        }
    }
}
</script>

