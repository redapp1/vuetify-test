<template>
    <nav>
        <v-toolbar dense class="grey white--text">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-items>
                <v-btn text>Arabic</v-btn>
                <v-btn text>Translation</v-btn>
                <v-btn text>Interpretaion</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <QuranNavside :drawer="drawer" @draw="drawer = $event"/>

    </nav>
</template>

<script>
import QuranNavside from './QuranNavside';

export default {
    data() {
        return {
            drawer: true
        }
    },

    components: {
        QuranNavside
    }
}
</script>
