<template lang="pug">
  .home
    .card-container
        .card-group(v-for="i in 3" :key="i")
            GroupHeader(:name="i")
            .card-group_body
                CardItem(v-for="(d,index) in 5" :key="d" :name="index")
            .card-group_footer Footer
</template>

<script>
// @ is an alias to /src
import CardItem from '@/components/CardItem'
import GroupHeader from '../components/GroupHeader'
export default {
    name: 'Home',
    components: {
        GroupHeader,
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
    width: 355px;
    min-height: 700px;
    margin: 20px;
    background-color: #c4c4c4;
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
