const https = require('https');
import axios from 'axios'

export default async function ({ store, redirect, route }) {

    store.dispatch('authentication/auth/isAuthenticated')
    

    // const url = 'https://cms.sinexcusas.pe/api/'
    // const agent = new https.Agent({  
    //     rejectUnauthorized: false
    // });


    // store.commit('authentication/auth/setPath', route.fullPath)

    // store.dispatch('authentication/auth/isAuthenticated')

    
}