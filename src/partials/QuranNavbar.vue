<template>
    <nav>
        <v-tabs show-arrows>
            <v-tab :to="{name: 'page', param: {'page': pageNumber}}"> Arabic </v-tab>
            <v-tab :to="{name: 'translation', params: {'page': pageNumber, 'edition': edition}}"> Translation </v-tab>
            <v-tab> Interpretaion </v-tab>
            <v-tab :to="{name: 'search', param: {'keyWord': keyWord}}"> Results </v-tab>
        </v-tabs>
    </nav>
</template>

<script>
import EventBus from '../event-bus/event-bus';

export default {
    data() {
        return {
            keyWord: ''
        }
    },

    computed: {
        pageNumber() {
            return this.$store.getters.getCurrentPage
        },

        edition() {
            return this.$store.getters.getCurrentEdition
        }
    },

    mounted() {
        EventBus.$on('search:keyword', function(keyWord) {
            this.keyWord = keyWord
        })
    }
}
</script>
