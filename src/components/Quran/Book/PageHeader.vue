<template>
    <v-container class="title grey lighten-1">
        <v-layout>
            <v-flex xs12 md3 class="text-left">
                    <span class="text-left"> {{ page.ayahs[0].surah.name }} </span>
            </v-flex>
            <v-flex xs12 md6 class="text-center">
                <PaginationButton :isNextPage="false" class="text-center"/>
                    {{ page.number }}
                <PaginationButton :isNextPage="true"/>
            </v-flex>
            <v-flex xs12 md3 class="text-right">
                <span class="text-right"> {{ page.ayahs[0].juz }} </span>
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

