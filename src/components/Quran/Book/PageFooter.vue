<template>
    <div>
         <v-pagination
            v-model="page"
            :length="604"
            @input="goToPage($event)"
        >
        </v-pagination>
        {{ pageNumber }} 
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: this.pageNumber
        }
    },
    props: ['pageNumber'],
    methods: {
        goToPage(page) {
            this.$router.push({name: 'page', params: {page}});

            console.log(this.$route.path);
        }
    }
}
</script>