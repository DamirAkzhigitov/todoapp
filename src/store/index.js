import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoGroupList: [
            {
                name: 'Введите название',
                results: [
                    {
                        name: 'Карточки',
                        status: true,
                        body: 'Создать сущности для карточек и групп'
                    }
                ]
            }
        ]
    },
    mutations: {
        SET_TODO(state, group) {
            state.todoGroupList = group
        },
        ADD_NEWCARD(state, idGroup) {
            state.todoGroupList[idGroup].results.push({
                name: 'Введите название',
                status: false,
                body: 'Тут пусто'
            })
        },
        ADD_TODOGROUP(state) {
            const newGroup = {
                name: 'Введите ',
                results: []
            }
            state.todoGroupList.push(newGroup)
        },
        REMOVE_GROUP(state, id) {
            state.todoGroupList = state.todoGroupList.filter(
                (group, index) => index !== id
            )
        }
    },
    actions: {
        addTodoCard({ commit }) {
            commit('ADD_TODO')
        }
    },
    modules: {}
})
