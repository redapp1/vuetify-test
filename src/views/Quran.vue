<template>
    <v-container grid-list-md>
        <v-layout row>
            <v-flex sm12 md4>
                <QuranNavside />
            </v-flex>
            <v-flex sm12 md8>
                <v-layout row>
                    <v-flex sm12 md12>
                        <QuranNavbar/>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex sm12 md12>
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


