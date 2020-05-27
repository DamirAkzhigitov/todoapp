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
        ADD_TODOGROUP(state, newGroup) {
            state.todoGroupList.push(newGroup)
        }
    },
    actions: {
        getTodoState({ commit }) {
            const list = checkLocalStorage()
            commit('SET_TODOGROUP', list)
        },
        removeTodoGroup({ commit }, id) {
            const newList = filterList(id)
            localStorage.setItem('todoGroupList', JSON.stringify(newList))

            commit('SET_TODOGROUP', newList)
        },
        addTodoCard({ commit }, data) {
            const newList = checkLocalStorage()
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
        updateGroup({ commit }, data) {
            const newList = checkLocalStorage()
            newList[data.id].name = data.name
            localStorage.setItem('todoGroupList', JSON.stringify(newList))
            commit('SET_TODOGROUP', newList)
        },
        updateTodoCard({ commit }, data) {
            const newList = checkLocalStorage()
            newList[data.parentId].results[data.id] = data.result
            localStorage.setItem('todoGroupList', JSON.stringify(newList))
            commit('SET_TODOGROUP', newList)
        },
        removeTodoCard({ commit }, data) {
            const newList = checkLocalStorage()
            newList[data.parentId].results = newList[
                data.parentId
            ].results.filter((item, index) => index !== data.id)
            localStorage.setItem('todoGroupList', JSON.stringify(newList))

            commit('SET_TODOGROUP', newList)
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
