<template lang="pug">
    .card-group-item
        .card-group-item_header
            .card-group-item_check
                .card-group-item_check__icon
            .card-group-item_name card group {{ name }}
            .card-group-item_remove
                .card-group-item_remove__icon
        .card-group-item_body item {{ name }}
        .card-group-item_footer
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

<style scoped lang="scss">
.card-group-item {
    margin: 20px;

    width: 305px;
    min-height: 240px;

    background: #ffffff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    &_header {
        height: 50px;
        background: #9e9e9e;
        color: #fff;
        display: flex;
        justify-content: space-between;
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
        &__icon {
            position: absolute;
            left: 0;
            top: 0;
            width: 50px;
            height: 50px;
        }
    }
    &_remove {
        &:hover {
            background-color: rgba(248, 27, 27, 0.38);
        }
        &__icon {
            background: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15H29.5' stroke='white'/%3E%3Cpath d='M14.75 29.75L14.75 0.25' stroke='white'/%3E%3C/svg%3E%0A")
                center no-repeat;
            transform: rotate(-45deg);
        }
    }
    &_check {
        &:after {
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
        &__icon {
            background: url("data:image/svg+xml,%3Csvg width='41' height='31' viewBox='0 0 41 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 17.5L12.5 29L40 1.5' stroke='%231A5C21' stroke-width='2'/%3E%3C/svg%3E%0A")
                center no-repeat;
            display: none;
            &-active {
                display: initial;
            }
        }
    }
}
</style>
