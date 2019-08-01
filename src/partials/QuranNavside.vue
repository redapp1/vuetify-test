<template>
   <v-card>
      <v-list>
        <TranslationSubNav />
      </v-list>
      <v-list>
        <BrowserNavSide />
      </v-list>
    </v-card>
</template>

<script>
import TranslationSubNav from '../components/Quran/Translation/TranslationSubNav';
import BrowserNavSide from '../components/Quran/Browser/BrowserNavSide'
export default {
    components: {
      TranslationSubNav,
      BrowserNavSide
    }
}
</script>
