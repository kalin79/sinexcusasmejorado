import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie';
import cookie from 'cookie';

// export default ({ store , req }) => {
//   window.onNuxtReady(() => {
//     createPersistedState({
//       // key: 'yourkey',
//       paths: [
//         'authentication.auth.userAuth',
//       ],
//       storage: {
//         getItem: (key) => {
//             // See https://nuxtjs.org/guide/plugins/#using-process-flags
//             if (process.server) {
//               const parsedCookies = cookie.parse(req.headers.cookie);
//               return parsedCookies[key];
//             } else {
//               return Cookies.get(key);
//             }
//         },
//         // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
//         setItem: (key, value) =>
//           Cookies.set(key, value, { expires: 365, secure: true }),
//         removeItem: key => Cookies.remove(key)
//       }
//     })(store)
//   })
// }

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
        // key: 'yourkey',
        paths: [
          // 'userdata.person', 
          // 'pet.dataPets', 
          'authentication.auth.userAuth',
        ]
    })(store)
  })
}