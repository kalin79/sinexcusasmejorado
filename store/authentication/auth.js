// Vamos a tener la informacion del estado del modulo de autentificacion
// donde tendremos los siguiente:

export const state = () => ({
    userAuth: {
        user: null,
        isLogged: false,
        error: false,
        errorMessage: '',
        path: ''
    }
})  

export const mutations = {
    setUsuario(state,payload){
        state.userAuth.user = payload
        state.userAuth.isLogged = true 
        state.userAuth.error = false
        state.userAuth.errorMessage = ''
    },
    setPath(state,payload){
        state.userAuth.path = payload
    },
    setError(state,payload){
        state.userAuth.error = true
        state.userAuth.errorMessage = payload
        state.userAuth.user = null
        state.userAuth.isLogged = false
        state.userAuth.path = ''
    },
    setLogout(state){
        state.userAuth.user = null
        state.userAuth.isLogged = false
        state.userAuth.path = ''
    }
}

export const actions = {
    async crearUsuario({commit,state}, payload){
        const addittional_info = {"area": payload[1].area,"gender": payload[4].gender, "nameCity": payload[5].city, "workerType": payload[2].workerType, "company": payload[5].company}
        let nameEnterprise = ''
        if (payload[0].companyType === 0)
            nameEnterprise = 'Enel'
        else
            nameEnterprise = 'Otro'
        try{
            let response = await this.$axios.$post('register',{
                email: payload[5].email,
                name: payload[5].name,
                password: payload[5].password,
                sur_name: payload[5].lastname,
                external_enterprise: payload[0].companyType,
                enterprise: nameEnterprise,
                addittional_info: addittional_info
            })
            // console.log(response)
            this.$axios.defaults.headers.common['Authorization']
            commit('setUsuario', response)
            localStorage.setItem("admin::token", response.token)
            // Cookies.set('admin::token', response.token);
            // console.log(state.userAuth.path)
            if ( state.userAuth.path != ''){
                this.$router.push(`/${state.userAuth.path}`)
                this.$router.push('/')
            }else{
                this.$router.push('/')
            }
        }catch (e) {
            commit('setErrorMessage', e.message)
        } finally {

        }
        
    },
    async ingresoUsuario({commit, state}, usuario){
        try{
            // hacemos nuestra peticion
            let response = await this.$axios.$post('login',{
                email: usuario.email,
                password: usuario.password
            })
            this.$axios.defaults.headers.common['Authorization']
            commit('setUsuario', response)
            // console.log(response)
            localStorage.setItem("admin::token", response.token)
            // Cookies.set('admin::token', response.token)
            // console.log(state.userAuth.path)
            if ( state.userAuth.path != ''){
                // this.$router.push(`/${state.userAuth.path}`)
                this.$router.push('/')
            }else{
                this.$router.push('/')
            }
            // redirect('/')

        } catch (e) {
            commit('setErrorMessage', e.message)
        } finally {

        }
        
    },
    async isAuthenticated({commit, state}){
        try{
            // Cookies.get('admin::token');
            const token = localStorage.getItem('admin::token')
             // Cookies.get('admin::token')
            const tokenHeader = `Bearer ${token}`
            this.$axios.setHeader('Authorization', tokenHeader)
            // console.log(token)
            let response = await this.$axios.$get('current')
            // console.log(response)
        } catch (e) {
            console.log(e)
            commit('setErrorMessage', e.message)
        } finally {

        }
    },

    async cerrarSesion({commit}){
        try{
            // hacemos nuestra peticion
            const token = localStorage.getItem('admin::token')
            // Cookies.get('admin::token');
            const tokenHeader = `Bearer ${token}`
            // console.log(tokenHeader)
            this.$axios.setHeader('Authorization', tokenHeader)
            await this.$axios.$post('logout')
            commit('setLogout')
            this.$router.push('/')
        } catch (e) {
            commit('setErrorMessage', e.message)
        } finally {

        }
        
    }
}

export const getters = {
    getIsLogged(state) {
        return state.userAuth.isLogged
    }  
}