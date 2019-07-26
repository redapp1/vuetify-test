<template>
    <div>
        <v-bton @click="goToPage(false)"></v-bton>
        <v-bton @click="goToPage"></v-bton>
        {{ pageNumber }} 
    </div>
</template>

<script>
export default {
    props: ['pageNumber'],
    methods: {
        goToPage(isNext = true) {
            this.$router.push({name: 'page', params: { page: this.page + 1 }});
        }
    }
}
</script>