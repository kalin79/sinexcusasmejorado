export const state = () => ({
    dataArticles: {
        articles: null,
        isLoading: false,
    }
})

export const mutations = {
    setDataArticles(state,payload){
        state.dataArticles.articles = payload
        state.dataArticles.isLoading = true
    }
}
export const actions = {}
export const getters = {
    getArticlesCMS(state){
        return state.dataArticles
    }
}