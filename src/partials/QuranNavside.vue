<template>
   <v-navigation-drawer
        v-model="draw"
        app
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
      </v-navigation-drawer>
</template>

<script>
export default {
    props: ['drawer'],

    computed: {
      draw: {
        get: function() {
          return this.drawer
        },

        set: function(value) {
          this.$emit('draw', value)
        }
      }
    }
}
</script>
