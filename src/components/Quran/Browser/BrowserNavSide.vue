<template>
<v-list-group value="true">
          <template v-slot:activator>
            <v-list-item-title>Browser</v-list-item-title>
          </template>
            <v-text-field
            hide-details
            append-icon="search"
            single-line
            class="mx-2"
            v-model="keyword"
            @click:append="searchByKeyword"
            >
            </v-text-field>
            <v-select
                :items="[]"
                name="category"
                item-value="identifier"
                item-text="name"
                class="mx-2"
                light
            >
            </v-select>
        </v-list-group>
</template>

<script>
import EventBus from '../../../event-bus/event-bus';

export default {
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        searchByKeyword() {
            EventBus.$emit('search:keyword', this.keyword);

            this.$router.push({name: 'search', params: {keyWord: this.keyword}})
        }
    }
}
</script>

