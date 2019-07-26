<template>
    <v-app id="app">
        <v-container grid-list-md text-center>
            <v-layout wrap>
                <v-flex xs12>
                    <Header />
                </v-flex>

                <v-flex xs12>
                    <Footer />
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import Header from './partials/Header';
import Footer from './partials/Footer';

export default {
    components: {
        Header, 
        Footer
    }
}
</script>
