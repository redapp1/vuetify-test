<template>
    <nav>
        <v-tabs mobile-break-point>
            <v-tab :to="{name: 'page', param: {page: pageNumber}}"> Arabic </v-tab>
            <v-tab> Translation </v-tab>
            <v-tab> Interpretaion </v-tab>
        </v-tabs>
    </nav>
</template>

<script>
export default {
    computed: {
        pageNumber() {
            return this.$store.getCurrentPage
        }
    }
}
</script>
