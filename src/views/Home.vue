<template lang="pug">
  .home
    .card-container
        .card-group(v-for="(group, key) in todoGroupList" :key="group.id")
            GroupHeader(:name="group.name" :id="key")
            .card-group_body
                CardItem(name="index" v-for="(card, index) in group.results"
                    :key="card.id"
                    :name="card.name"
                    :status="card.status"
                    :body="card.body"
                    :idCard="index"
                    :idGroup="key")
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
import CardItem from '@/components/CardItem'
import GroupHeader from '../components/GroupHeader'
export default {
    name: 'Home',
    components: {
        GroupHeader,
        CardItem
    },
    computed: {
        ...mapState(['todoGroupList', 'testList'])
    },
    methods: {
        ...mapActions(['addTodoGroup', 'getTodoState'])
    },
    created() {
        this.getTodoState()
    }
}
</script>
<style lang="scss">
.card-container {
    display: flex;
    flex-flow: row;
    overflow-x: scroll;
    min-height: 800px;
    &_header {
    }
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
