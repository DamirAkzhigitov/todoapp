<template lang="pug">
    .card-group_item item {{ name }}
</template>

<script>
export default {
    name: 'Card',
    props: {
        name: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped></style>
