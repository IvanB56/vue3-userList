import {createStore} from 'vuex'
import {getFavourites} from "@/utils/withStorage";

export const store = createStore({
    state: () => ({
        bigImageSrc: '',
        favourites: getFavourites() || [],
    }),
    getters: {
        getBigImageSrc(state) {
            return state.bigImageSrc;
        },
    },
    mutations: {
        setBigImageSrc(state, url) {
            state.bigImageSrc = url;
        },
        updateFavorites(state, data) {
            state.favourites = [...data];
        }
    }
})
