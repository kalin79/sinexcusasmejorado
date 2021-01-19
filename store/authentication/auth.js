// Vamos a tener la informacion del estado del modulo de autentificacion
// donde tendremos los siguiente:
export const state = () => ({
    userAuth: {
        user: null,
        isLogged: false,
        error: false,
        errorMessage: ''
    }
})  

export const mutations = {
    setUsuario(state,payload){
        state.userAuth.user = payload
        state.userAuth.isLogged = true 
        state.userAuth.error = false
        state.userAuth.errorMessage = ''
    },
    setError(state,payload){
        state.userAuth.error = true
        state.userAuth.errorMessage = payload
        state.userAuth.user = null
        state.userAuth.isLogged = false

    },
    setLogout(state){
        state.userAuth.user = null
        state.userAuth.isLogged = false
    }
}

export const actions = {
    crearUsuario({commit}, usuario){
        // hacemos uso de nuestro API.
        const usuarioCreado = {
            email: '',
            uid: '',
        }
        commit('setUsuario', usuarioCreado)

        //commit('setErrorMessage', error)
        
    },

    ingresoUsuario({commit}, usuario){
        try{
            // hacemos nuestra peticion
            const usuarioCreado = {
                email: '',
                uid: '',
            }
            
            commit('setUsuario', usuarioCreado)

        } catch (e) {
            commit('setErrorMessage', e.message)
        } finally {

        }
        
    },

    cerrarSesion({commit}){
        commit('setLogout')
    }
}