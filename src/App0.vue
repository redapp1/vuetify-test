<template>
    <v-app id="app">
        <Header />       
        <v-content>
            <router-view></router-view>
        </v-content>        
        <Footer />
        
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
