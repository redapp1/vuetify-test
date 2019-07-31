<template>
    <v-list-group
          prepend-icon="account_circle"
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-title>Translation</v-list-item-title>
          </template>
            <v-select
                :items="editions"
                name="category"
                item-text="identifier"
                v-model="currentEdition"
                @change="changeEdition($event)"
            >
            </v-select>
        </v-list-group>
</template>

<script>
export default {
    computed: {
        editions() {
            return this.$store.getters.getEditions;
        },

        currentEdition() {
            return this.$store.getters.getCurrentEdition;
        }
    },

    methods: {
        changeEdition(edition) {
            this.$store.commit('setCurrentEdition', edition)

            this.$router.push(
                    {   
                        name: 'translation', 
                        params: { edition: this.currentEdition }
                    })
            
        }
    }
}
</script>

