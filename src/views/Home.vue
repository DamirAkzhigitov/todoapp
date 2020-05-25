<template lang="pug">
  .home
    .card-container
        .card-group(v-for="i in 3" :key="i")
            CardHeader(:name="i")
            .card-group_body
                CardItem(v-for="(d,index) in 5" :key="d" :name="index")
            .card-group_footer Footer
</template>

<script>
// @ is an alias to /src
import CardItem from '@/components/CardItem'
import CardHeader from '../components/CardHeader'
export default {
    name: 'Home',
    components: {
        CardHeader,
        CardItem
    }
}
</script>
<style lang="scss">
.card-container {
    display: flex;
    flex-flow: row;
}
.card-group {
    margin: 20px;
    border: 2px solid #000;
    &_header {
        background-color: #2c3e50;
        color: #fff;
        padding: 5px;
    }
    &_item {
        padding: 5px;
        &:first-child {
            margin-top: 5px;
        }
        &:last-child {
            border-bottom: 1px solid;
        }
    }
    &_footer {
        padding: 5px;
        background-color: #2c3e50;
        color: #fff;
    }
}
</style>
