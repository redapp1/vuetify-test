<template>
    <v-container class="grey lighten-1">
        <v-layout>
            <v-flex class="text-center">
                <PaginationButton :isNextPage="false"/>
                    {{ page.number }}
                <PaginationButton :isNextPage="true"/>
            </v-flex>
        </v-layout> 
    </v-container>
</template>

<script>
import PaginationButton from './PaginationButton';

export default {
    props: ['page'],

     components: {
        PaginationButton
    }
}
</script>