const state = {
    user: null,
    userStatus: null,
};

const getters = {
    authUser: state => {
        return state.user;
    }
};

const actions = {
    async fetchAuthUser({commit, state}) {
        try {
            const response = await axios.get('/api/auth-user');
            commit('setAuthUser', response.data);
        } catch (err) {
            console.log(err);
        }
    }
};

const mutations = {
    setAuthUser(state, user) {
        state.user = user;
    }
};

export default {
    state, getters, actions, mutations
};
