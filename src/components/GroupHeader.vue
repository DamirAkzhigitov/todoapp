<template lang="pug">
    .card-group_header
        .card-group_add(@click="addTodoCard(id)")
            .card-group_add__icon
        .card-group_name(v-if="!editMode" @click="editMode = !editMode")  {{ groupName }}
        input.card-group-item_name(v-else v-model="groupName" @blur="toggleEdit")
        .card_group_remove(@click="removeTodoGroup(id)")
            .card_group_remove__icon
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'GroupHeader',
    props: {
        name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            groupName: this.name,
            editMode: false
        }
    },
    methods: {
        toggleEdit(changeEditMode = true) {
            if (changeEditMode) this.editMode = !this.editMode
            const group = {
                id: this.id,
                name: this.groupName
            }
            this.updateGroup(group)
        },
        ...mapActions(['addTodoCard', 'removeTodoGroup', 'updateGroup'])
    }
}
</script>

<style scoped lang="scss">
.card-group_header {
    height: 50px;
    background-color: #565656;
    color: #fff;
    display: flex;
    justify-content: space-between;
}
.card-group_name {
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.5);
}
.card-group_add,
.card_group_remove {
    position: relative;
    background-color: #6b6b6b;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #42b983;
    }
    &__icon {
        position: absolute;
        left: 0;
        top: 0;
        width: 50px;
        height: 50px;
        background: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15H29.5' stroke='white'/%3E%3Cpath d='M14.75 29.75L14.75 0.25' stroke='white'/%3E%3C/svg%3E%0A")
            center no-repeat;
    }
}
.card_group_remove {
    &:hover {
        background-color: #c40303;
    }
    &__icon {
        transform: rotate(-45deg);
    }
}
</style>
