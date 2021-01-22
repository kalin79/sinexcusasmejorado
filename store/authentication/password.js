export const state = () => ({
    userRecovery: {
        user: null,
        isRecovery: false,
        error: false,
        errorMessage: ''
    }
})

export const mutations = {
    setUserRecovery(state,payload){
        state.userRecovery.user = payload
        state.userRecovery.isRecovery = true 
        state.userRecovery.error = false
        state.userRecovery.errorMessage = ''
    },
    setError(state,payload){
        state.userAuth.error = true
        state.userAuth.errorMessage = payload
        state.userAuth.email = null
        state.userAuth.isRecovery = false

    },
}

export const actions = {
    async recoveryPass({commit}, payload){
        console.log(payload)
        try{
            // hacemos nuestra peticion
            let response = await this.$axios.$post('forget-password',{
                email: payload.email
            })
            this.$axios.defaults.headers.common['Authorization']
            commit('setUserRecovery', response)
            // console.log(response)
            // this.$router.push('/')
            // redirect('/')

        } catch (e) {
            commit('setErrorMessage', e.message)
        } finally {

        }
    }
}