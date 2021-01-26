export const state = () => ({
    dataCourses: {
        course: null,
        isLoading: false,
        error: false,
        errorMessage: '',
    }
})

export const mutations = {
    setDataCourses(state,payload){
        state.dataCourses.course = payload
        state.dataCourses.isLoading = true
        state.dataCourses.error = true
        state.dataCourses.errorMessage = payload
    },
    setErrorMessage(state,payload){
        state.dataCourses.course = null
        state.dataCourses.isLoading = true
        state.dataCourses.error = true
        state.dataCourses.errorMessage = payload
    },
}
export const actions = {
    async dataAllCourses({commit, state}){
        try{
            const token = localStorage.getItem('admin::token')
            const tokenHeader = `Bearer ${token}`
            this.$axios.setHeader('Authorization', tokenHeader)
            // console.log(token)
            let response = await this.$axios.$get('courses')
            commit('setDataCourses', response.courses)
        } catch (e) {
            console.log(e)
            commit('setErrorMessage', e.message)
        } finally {

        }
    },
}
export const getters = {
    getArticlesCMS(state){
        return state.dataCourses
    }
}