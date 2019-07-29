<template>
    <div>
        <PaginationButton :isNextPage="false"/>
        {{ pageNumber }}
        <PaginationButton :isNextPage="true"/>
    </div>
</template>

<script>
import PaginationButton from './PaginationButton';

export default {
    props: ['pageNumber'],

    components: {
        PaginationButton
    }
}
</script>

