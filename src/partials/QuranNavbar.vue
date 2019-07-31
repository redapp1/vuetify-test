<template>
    <nav>
        <v-tabs show-arrows>
            <v-tab :to="{name: 'page', param: {'page': pageNumber}}"> Arabic </v-tab>
            <v-tab :to="{name: 'translation', params: {'page': pageNumber, 'edition': edition}}"> Translation </v-tab>
            <v-tab> Interpretaion </v-tab>
        </v-tabs>
    </nav>
</template>

<script>
export default {
    computed: {
        pageNumber() {
            return this.$store.getters.getCurrentPage
        },

        edition() {
            return this.$store.getters.getCurrentEdition
        }
    }
}
</script>
