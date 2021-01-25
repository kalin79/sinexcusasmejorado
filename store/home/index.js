export const state = () => ({
    dataHome: {}
})

export const mutations = {
    setDataHome(state,payload){
        state.dataHome = payload
    }
}
export const actions = {}
export const getters = {
    getDataCMS(state){
        return state.dataHome
    }
}