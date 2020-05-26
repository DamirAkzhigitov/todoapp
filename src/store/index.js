import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoGroupList: []
    },
    mutations: {
        SET_TODOGROUP(state, list) {
            state.todoGroupList = list
        },
        ADD_NEWCARD(state, card) {
            state.todoGroupList[card.id].results.push(card.body)
        },
        ADD_TODOGROUP(state, newGroup) {
            state.todoGroupList.push(newGroup)
        },
        REMOVE_GROUP(state, id) {
            state.todoGroupList = state.todoGroupList.filter(
                (group, index) => index !== id
            )
        },
        REMOVE_CARD(state, card) {
            const data = state.todoGroupList
            console.log('card = ', card)
            console.log('data = ', data)
            // const newGroupData = data[card.parentId].results.filter(
            //     (value, index) => index !== card.id
            // )
            // console.log('newGroupData = ', newGroupData)
            // console.log('data[card.parentId] = ', data[card.parentId])
            // data[card.parentId] = newGroupData
            // // state.todoGroupList = data
        }
    },
    actions: {
        getTodoState({ commit }) {
            const list = checkLocalStorage()
            console.log('list = ', list)
            commit('SET_TODOGROUP', list)
        },
        writeTodoState({ commit }, data) {
            localStorage.setItem('todoGroupList', JSON.stringify(data))
            commit('SET_TODOGROUP', data)
        },
        removeTodoGroup({ commit }, id) {
            const newList = filterList(id)
            localStorage.setItem('todoGroupList', JSON.stringify(newList))
            commit('SET_TODOGROUP', newList)
        },
        addTodoCard({ commit }, data) {
            const newList = checkLocalStorage()
            console.log('newList = ', newList)
            const card = {
                name: 'Введите название',
                status: false,
                body: 'Тут пусто'
            }
            newList[data].results.push(card)
            localStorage.setItem('todoGroupList', JSON.stringify(newList))
            commit('SET_TODOGROUP', newList)
        },
        addTodoGroup({ commit }) {
            const newList = checkLocalStorage()
            const newGroup = {
                name: 'Введите ',
                results: []
            }
            newList.push(newGroup)
            localStorage.setItem('todoGroupList', JSON.stringify(newList))
            commit('ADD_TODOGROUP', newGroup)
        },
        removeTodoCard({ commit }, data) {
            commit('REMOVE_CARD', data)
        }
    },
    modules: {}
})

const checkLocalStorage = () => {
    let list
    if (localStorage.getItem('todoGroupList')) {
        try {
            list = JSON.parse(localStorage.getItem('todoGroupList'))
        } catch (e) {
            console.log(e)
        }
    } else {
        list = [
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
    }
    return list
}

const filterList = params => {
    const list = checkLocalStorage()
    const newList = list.filter((todo, index) => index !== params)
    return newList
}
