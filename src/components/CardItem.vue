<template lang="pug">
    .card-group-item
        .card-group-item_header(:class="{ 'card-group-item_header__done' : status }")
            .card-group-item_check
                .card-group-item_icon(:class="{ 'card-group-item_icon__done' : status}")
            .card-group-item_name {{ name }}
            .card-group-item_remove(@click="removeCard")
                .card-group-item_icon
        .card-group-item_body {{ body }} {{ idCard }} {{ idGroup }}
        .card-group-item_footer
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Card',
    props: {
        name: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        idCard: {
            type: Number,
            required: true
        },
        idGroup: {
            type: Number,
            required: true
        }
    },
    methods: {
        removeCard() {
            const card = {
                parentId: this.idGroup,
                id: this.idCard
            }
            console.log('remove this card id = ', card)
            this.removeTodoCard(card)
        },
        ...mapActions(['removeTodoCard'])
    }
}
</script>

<style scoped lang="scss">
.card-group-item {
    margin: 10px 20px;

    width: 305px;
    min-height: 240px;

    background: #ffffff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    &_icon {
        position: absolute;
        left: 0;
        top: 0;
        width: 50px;
        height: 50px;
    }
    &_header {
        height: 50px;
        background: #9e9e9e;
        color: #fff;
        display: flex;
        justify-content: space-between;
        &__done {
            background: rgba(52, 147, 104, 0.99);
        }
    }
    &_body {
        padding: 10px;
    }
    &_name {
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
    &_check,
    &_remove {
        position: relative;
        background-color: rgba(255, 255, 255, 0.5);
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
            background-color: rgba(66, 185, 131, 0.75);
        }
    }
    &_remove {
        &:hover {
            background-color: rgba(248, 27, 27, 0.38);
        }
        .card-group-item_icon {
            background: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15H29.5' stroke='white'/%3E%3Cpath d='M14.75 29.75L14.75 0.25' stroke='white'/%3E%3C/svg%3E%0A")
                center no-repeat;
            transform: rotate(-45deg);
        }
    }
    &_check {
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 0;
            width: 32px;
            height: 32px;
            background: rgba(255, 255, 255, 0.5);
        }
        .card-group-item_icon {
            background: url("data:image/svg+xml,%3Csvg width='41' height='31' viewBox='0 0 41 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 17.5L12.5 29L40 1.5' stroke='%231A5C21' stroke-width='2'/%3E%3C/svg%3E%0A")
                center no-repeat;
            display: none;
        }
        .card-group-item_icon__done {
            z-index: 0;
            display: block;
            background-color: rgba(66, 185, 131, 0.75);
        }
    }
}
</style>
