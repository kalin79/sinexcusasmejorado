const https = require('https');
import axios from 'axios'

export default async function ({ context, store, route, redirect, req, params }) {
    console.log(process.client)
    const id = params.id
    console.log(id)
    if (process.client && store.getters['authentication/auth/getIsLogged'] === null) {
        console.log(route.fullPath)
        console.log('recargo')

        store.dispatch('courses/course/dataGetCourse','3')
    }else{
        console.log('no recargo')
    }
    

    // const url = 'https://cms.sinexcusas.pe/api/'
    // const agent = new https.Agent({  
    //     rejectUnauthorized: false
    // });


    // store.commit('authentication/auth/setPath', route.fullPath)

    // store.dispatch('authentication/auth/isAuthenticated')

    
}