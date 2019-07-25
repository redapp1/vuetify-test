<template>
    <div>
        Bonjour VueJS !!!
    </div>
</template>
<script>
export default {
    methods: {
        changeLocale () {
        this.$vuetify.lang.current = 'ar'
        },
    },
    mounted() {
        this.$vuetify.theme.dark = false;
    }
}
</script>

<style>

</style>
