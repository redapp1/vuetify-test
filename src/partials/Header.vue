<template>
<v-bottom-navigation
      value="1"
      color="deep-purple accent-4"
    >
      <v-btn
        to="/"
      >
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>
  
      <v-btn
        to="/quran"
      >
        <span>Quran</span>
        <v-icon>book</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {title: "Home"},
                {title: "Quran"}
            ]
            }
        }
    }

</script>

