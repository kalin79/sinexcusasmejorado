<template>
    <div class="boxRegister BoxFormUser">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-8">
                    <div class="card boxForm">
                        <div class="card-header">
                            Regístrate
                        </div>
                        <div class="card-body">
                            <!-- <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
                                {{ error[0] }}
                            </div> -->
                            <ValidationObserver v-slot="{ handleSubmit }" ref="form" >
                            <b-form @submit.prevent="handleSubmit(onSubmit)">
                                <div class="form-group">
                                    
                                    <ValidationProvider tag="div" vid="companyTypes" rules="required" name="tipo de empresa" v-slot="{ errors, validated }" >
                                        <b-form-select 
                                            v-model="companyType" 
                                            :options="companyTypes"
                                            @change="updateEmail($event)"
                                            :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                        ></b-form-select>
                                        <div class="error-input">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group boxSexo">
                                    <div class="d-flex justify-content-start justify-content-lg-between align-items-start align-items-lg-center flex-column flex-lg-row ">
                                        <div class="form-label">
                                            <p>Género</p>
                                        </div>
                                        <div class="form-check">
                                            <b-form-radio v-model="gender" name="sexo" value="Hombre">H</b-form-radio>
                                        </div>
                                        <div class="form-check">
                                            <b-form-radio v-model="gender" name="sexo" value="Mujer">M</b-form-radio>
                                        </div>
                                        <div class="form-check">
                                            <b-form-radio v-model="gender" name="sexo" value="N/A">Sin especificar</b-form-radio>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <ValidationProvider tag="div" vid="name" rules="required" name="nombre" v-slot="{ errors, validated }" >
                                        <b-form-input
                                            v-model="form.name"
                                            autocomplete="off"
                                            type="text"
                                            :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            placeholder="Nombre"
                                        ></b-form-input>
                                        <div class="error-input">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <ValidationProvider tag="div" vid="lastname" rules="required" name="apellidos" v-slot="{ errors, validated }" >
                                        <b-form-input
                                            v-model="form.lastname"
                                            autocomplete="off"
                                            type="text"
                                            :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            placeholder="Apellidos"
                                        ></b-form-input>
                                        <div class="error-input">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <ValidationProvider tag="div" vid="lastname" rules="required|email" name="correo" v-slot="{ errors, validated }" >
                                        <b-form-input
                                            v-model="form.email"
                                            autocomplete="off"
                                            type="text"
                                            :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            :placeholder="plaholderEmail"
                                        ></b-form-input>
                                        <div class="error-input">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <ValidationProvider tag="div" vid="lastname" rules="required" name="contraseña" v-slot="{ errors, validated }" >
                                        <b-form-input
                                            v-model="form.password"
                                            autocomplete="off"
                                            type="password"
                                            :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            placeholder="Contraseña"
                                        ></b-form-input>
                                        <div class="error-input">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                                <div class="FormEnel" v-if="companyType==0">
                                    <div class="form-group">
                                        <b-form-select 
                                            v-model="area" 
                                            :options="areas"
                                        ></b-form-select>
                                    </div>
                                </div>
                                <div class="FormOtro" v-if="companyType==1">
                                    <div class="form-group">
                                        <b-form-select 
                                            v-model="workerType" 
                                            :options="workerTypes"
                                        ></b-form-select>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input
                                            v-model="form.company"
                                            autocomplete="off"
                                            type="text"
                                            placeholder="Nombre de la Empresa"
                                        ></b-form-input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <ValidationProvider tag="div" vid="city" rules="required" name="ciudad" v-slot="{ errors, validated }" >
                                        <b-form-input
                                            v-model="form.city"
                                            autocomplete="off"
                                            type="text"
                                            :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            placeholder="Ciudad"
                                        ></b-form-input>
                                        <div class="error-input">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group boxCheckbox">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <div class="d-flex justify-content-start align-items-center">
                                        <div class="form-checkbox">
                                            <!-- <b-form-checkbox
                                            v-model="chekTerm"
                                            value='1'
                                            unchecked-value='0'
                                            class="styled-checkbox"
                                            >
                                            <span>Al registrarte, aceptas las</span>
                                            </b-form-checkbox> -->
                                            <input class="styled-checkbox" id="checkbox-term" type="checkbox" v-model="chekTerm" true-value="1" false-value="0">
                                            <label for="checkbox-term"><span>Al registrarte, aceptas las</span></label>
                                        </div>
                                        <p>
                                            <nuxt-link to="/">Condiciones y Política de datos</nuxt-link>
                                        </p>
                                    </div>
                                    <div class="error-input" v-if="errorCheckTerm===1">
                                        Debe aceptar los términos y condiciones para registrarse
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="boxButtom">
                                        <button type="submit" class="btn btn-nuxt">registrarme</button>
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
            data: [],
            gender: null,
            plaholderEmail: 'Correo corporativo',
            chekTerm: '0',
            errorCheckTerm: 0,
            companyType: 0,
            companyTypes: [
                {
                    value: 0,
                    text: 'Enel'
                },
                {
                    value: 1,
                    text: 'Otro'
                },
            ],
            area: '',
            areas: [
                {
                    value: '',
                    text: 'Area'
                },
                {
                    value: 'Marketing',
                    text: 'Marketing'
                },
                {
                    value: 'Contabilidad',
                    text: 'Contabilidad'
                }
            ],
            workerType: '',
            workerTypes: [
                {
                    value: '',
                    text: 'Trabajador dependiente / independiente'
                },
                {
                    value: 'Trabajador Dependiente',
                    text: 'Trabajador Dependiente'
                },
                {
                    value: 'Trabajador Independiente',
                    text: 'Trabajador Independiente'
                },
            ],
        }
    },
    methods: {
        ...mapActions(
            {createUser: 'authentication/auth/crearUsuario'},
        ),
        onSubmit() {
            if ( this.chekTerm === '0' ) {
                this.errorCheckTerm = 1

                return false
            }
            this.errorCheckTerm = 0
            this.data = []
            this.data.push({'companyType' : this.companyType})
            this.data.push({'area': this.area})
            this.data.push({'workerType': this.workerType})
            this.data.push({'chekTerm': this.chekTerm})
            this.data.push({'gender': this.gender})
            this.data.push(this.form)
            this.createUser(this.data)
        },
        updateEmail($event) {
            if (this.companyType === 0)
                this.plaholderEmail = "Correo corporativo"
            else
                this.plaholderEmail = "Correo"
        }
    }
}
</script>
<style lang="sass">

</style>