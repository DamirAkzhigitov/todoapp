<template lang="pug">
    .card-group_header card group {{ name }}
</template>

<script>
export default {
    name: 'CardHeader',
    props: {
        name: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped></style>
