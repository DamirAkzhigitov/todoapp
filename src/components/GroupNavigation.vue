<template lang="pug">
    nav.navigation
        span(@click="addTodoGroup") Add todo group
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'GroupNavigation',
    methods: {
        ...mapActions(['addTodoGroup'])
    }
}
</script>

<style scoped lang="scss">
.navigation {
    min-height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        position: relative;
        padding: 10px 20px;
        background-color: #6b6b6b;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            background-color: #565656;
        }
    }
}
</style>
