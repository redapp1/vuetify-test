<template>
    <div>
        <PageAyah 
            v-for="(ayah, index) in pageAyahs" 
            :ayah = ayah
            :key="index">
        </PageAyah>
    </div>
</template>

<script>
import PageAyah from './PageAyah';

export default {
    props: ['pageAyahs'],

    components: {
        PageAyah
    }
}
</script>
