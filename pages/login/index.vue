<template>
    <div class="boxLoginIn BoxFormUser">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-8">
                    <div class="card boxForm">
                        <div class="card-header">
                            Bienvenido/a
                        </div>
                        <div class="card-body">
                            <!-- <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
                                {{ error[0] }}
                            </div> -->
                            <form method="post" @submit.prevent="userLogin">
                                <div class="form-group">
                                    <input type="email" v-model="login.email" class="form-control" placeholder="Correo">
                                </div>
                                <div class="form-group">
                                    <input type="password" v-model="login.password" class="form-control"  placeholder="Contraseña">
                                </div>
                                <div class="boxButtom">
                                    <button type="submit" class="btn btn-nuxt">ingresar</button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center boxLink">
                                    <nuxt-link to="/registrate" class="btn-link">
                                        <p>¿No tienes una cuenta? <span>Regístrate</span></p>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="btn-link">
                                        <p><span class="text-blue">¿Olvidaste tu contraseña?</span></p>
                                    </nuxt-link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations} from 'vuex'
export default {
    // middleware: 'guest',
    data () {
        return {
            login: {
                email: '',
                password: ''
            }, 
            errors: null
        }
    },
    computed: {
        
    },
    methods: {
        ...mapActions(
            {loginIn: 'authentication/auth/ingresoUsuario'},
        ),
        userLogin() {
            // console.log('validamos')
            this.loginIn(this.login)
        }
    },
    created(){
        // console.log(324)
    }
}
</script>
<style lang="sass">
    .boxLoginIn
        .boxLink
            padding-top: 1rem
            p
                span
                    &.text-blue
                        &:before
                            background: $blueLight
</style>