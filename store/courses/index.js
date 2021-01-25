export const state = () => ({
    dataCourses: {
        course: null,
        isLoading: false,
    }
})

export const mutations = {
    setDataCourses(state,payload){
        state.dataCourses = payload
        state.isLoading = true
    }
}
export const actions = {
    async dataAllCourse({commit, state}){
        try{
            const token = localStorage.getItem('admin::token')
            const tokenHeader = `Bearer ${token}`
            this.$axios.setHeader('Authorization', tokenHeader)
            // console.log(token)
            let response = await this.$axios.$get('courses')
            // console.log(response)
            commit('setDataCourses', response)
        } catch (e) {
            console.log(e)
            commit('setErrorMessage', e.message)
        } finally {

        }
    }
}
export const getters = {
    getArticlesCMS(state){
        return state.dataCourses
    }
}