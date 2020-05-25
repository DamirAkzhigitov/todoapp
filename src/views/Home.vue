<template lang="pug">
  .home
    .card-container
        .card-group(v-for="i in 5" :key="i")
            GroupHeader(:name="i")
            .card-group_body
                CardItem(v-for="(d,index) in 25" :key="d" :name="index")
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
    overflow-x: scroll;
}
.card-group {
    display: block;
    min-width: 355px;
    min-height: 700px;
    margin: 20px;
    background-color: #c4c4c4;
    &_body {
        display: flex;
        flex-flow: column;
        overflow: auto;
        height: 680px;
        align-items: center;
    }
    &_footer {
        padding: 5px;
        background-color: #2c3e50;
        color: #fff;
    }
}
</style>
