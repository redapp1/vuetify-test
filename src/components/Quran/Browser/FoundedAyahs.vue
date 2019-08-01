<template>
    <div>
        <ul>
            <li v-for="ayah in ayahsList" :key="ayah.number">
                ayah.text
            </li>
        </ul>
    </div>
</template>

<script>
import EventBus from '../../../event-bus/event-bus';
import { QURAN_SEARCH_API } from '../../../../config/config'

export default {
    data() {
        return {
            ayahsList: []
        }
    },

    async mounted() {
        let response = await this.axios.get(QURAN_SEARCH_API());

        console.log(this.ayahsList = response.data.data.matches)
    }
}
</script>
