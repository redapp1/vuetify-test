<template>
    <v-container grid-list-md fluid>
        <v-layout row>
            <v-flex xs-12 md-4>
                <QuranNavside />
            </v-flex>
            <v-flex xs-12 md-8>
                <v-layout row>
                    <v-flex xs-12 md-12>
                        <QuranNavbar/>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs-12 md-12>
                        <v-content>
                            <router-view :key="$route.fullPath"></router-view>
                        </v-content>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import QuranNavbar from '../partials/QuranNavbar';
import QuranNavside from '../partials/QuranNavside';

export default {
    components: {
        QuranNavbar,
        QuranNavside
    }
}
</script>


