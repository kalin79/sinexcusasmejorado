import createPersistedState from 'vuex-persistedstate'
 
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