import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

const host = 'http://localhost:3030'

export async function getAllIdeas() {
    return api.get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return api.get('/data/ideas/' + id);
}

export async function createIdea(idea) {
    return api.post('/data/ideas', idea);
}

export async function delteById(id) {
    return api.del('/data/ideas/' + id);    
}


export {
    login,
    register,
    logout,
}

