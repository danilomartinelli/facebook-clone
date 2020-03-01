const state = {
    activePage: null,
};

const getters = {
    activePage: state => {
        return state.activePage;
    }
};

const actions = {
    async setActivePage({commit}, payload) {
        commit('setActivePage', payload.activePage);
    }
};

const mutations = {
    setActivePage(state, activePage) {
        state.activePage = activePage;
    }
};

export default {
    state, getters, actions, mutations
};
