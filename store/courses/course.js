export const state = () => ({
    dataCourse: {
        units: null,
        isLoading: false,
        title: '',
        imgPortda: '',
        unitTitle: '',
        unitDescription: '',
        unitVideos: null,
        // unitAnswers: null,
        error: false,
        errorMessage: '',
    }
})

export const mutations = {
    setDataCourse(state,payload){
        // console.log(`>>>${payload.units[0].title}`)
        state.dataCourse.units = payload.units
        state.dataCourse.isLoading = true
        state.dataCourse.title = payload.course.title
        state.dataCourse.imgPortda = payload.course.banner
        state.dataCourse.unitTitle = payload.units[0].title
        state.dataCourse.unitDescription = payload.units[0].content
        // Trabajando los video
        if (payload.units[0].url_video){
            let videosString = payload.units[0].url_video.split('||')
            let pos = 0, numElementos = videosString.length
            let objVideos = videosString.splice(pos,numElementos)
            state.dataCourse.unitVideos = objVideos
        }else{
            state.dataCourse.unitVideos = null
        }
        // fin de los videos
        // state.dataCourse.unitAnswers = payload.units[0].
        state.dataCourse.error = false
        state.dataCourse.errorMessage = ''
    },
    setErrorMessage(state,payload){
        state.dataCourse.units = null
        state.dataCourse.isLoading = true
        state.dataCourse.title = ''
        state.dataCourse.imgPortda = ''
        state.dataCourse.unitTitle = ''
        state.dataCourse.unitDescription = ''
        state.dataCourse.unitVideos = ''
        state.dataCourse.error = true
        state.dataCourse.errorMessage = payload
    },
}
export const actions = {
    async dataGetCourse({commit, state},payload){
        /*
            Para obtener la informacion de un curso con sus unidades correspondientes 
            debo llamar a la siguiente API courses/{id}/units
        */
        try{
            const token = localStorage.getItem('admin::token')
            const tokenHeader = `Bearer ${token}`
            this.$axios.setHeader('Authorization', tokenHeader)
            // console.log(payload)
            let response = await this.$axios.$get('courses/'+payload+'/units')
            console.log(response)
            commit('setDataCourse', response)
        } catch (e) {
            console.log(e)
            commit('setErrorMessage', e.message)
        } finally {

        }
    }
}
export const getters = {
    getCourse(state){
        console.log(state.dataCourse)
        return state.dataCourse.course
    }
}