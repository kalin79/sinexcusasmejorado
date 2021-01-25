const https = require('https');
import axios from 'axios'

export default function ({ store }) {
    const url = 'https://cms.sinexcusas.pe/api/'
    const instance = axios.create({
        httpsAgent: new https.Agent({  
          rejectUnauthorized: false
        })
    });
    
    // instance.get(`${url}home`);
    // At request level
    const agent = new https.Agent({  
        rejectUnauthorized: false
    });
    return axios.get(`${url}home`, { httpsAgent: agent })
        .then (res => {
            store.commit('home/setDataHome', res.data)
        })
        .catch(error => {
            console.log(error);
        });
}