export const state = () => ({
    dataArticle: {
        id: null,
        slug: false,
    }
})

export const mutations = {
    setDataArticle(state,payload){
        state.dataArticle.id = payload.id
        state.dataArticle.slug = payload.slug
    }
}