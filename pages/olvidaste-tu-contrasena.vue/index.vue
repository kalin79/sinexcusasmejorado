<template>
    <div class="boxRecoverPass BoxFormUser">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-8">
                    <div class="card boxForm">
                        <div class="card-header">
                            Recuperar Contraseña
                        </div>
                        <div class="card-body">
                            <ValidationObserver v-slot="{ handleSubmit }" ref="form" >
                            <b-form @submit.prevent="handleSubmit(onSubmit)">
                                <div class="form-group">
                                    <ValidationProvider tag="div" vid="lastname" rules="required|email" name="correo" v-slot="{ errors, validated }" >
                                        <b-form-input
                                            v-model="form.email"
                                            autocomplete="off"
                                            type="text"
                                            :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            placeholder="Correo"
                                        ></b-form-input>
                                        <div class="error-input">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                                
                                <div class="form-group">
                                    <div class="boxButtom">
                                        <button type="submit" class="btn btn-nuxt">Recuperar Contraseña</button>
                                    </div>
                                </div>
                            </b-form>
                            </ValidationObserver>
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
    data () {
        return {
            form: {},
        }
    },
    methods: {
        ...mapActions(
            {recoveryPass: 'authentication/password/recoveryPass'},
        ),
        onSubmit() {
            console.log(this.form)
            this.recoveryPass(this.form)
        }
    }
}
</script>
<style lang="sass">

</style>