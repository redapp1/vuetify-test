<template>
    <v-container>
        <QuranNavbar/>
        <v-content>
           <router-view :key="$route.fullPath"></router-view>
        </v-content>
    </v-container>
</template>

<script>
import QuranNavbar from '../partials/QuranNavbar';

export default {
    components: {
        QuranNavbar
    }
}
</script>


