import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const host = 'http://localhost:3030';

const endpoints = {
    all: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    create: '/data/theaters',
    details: (id) => `/data/theaters/${id}`,
    update: (id) => `/data/theaters/${id}`,
    delete: (id) => `/data/theaters/${id}`,
    profile: (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    like: `/data/likes`,
    totalLikes: (theaterId) => `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`
}

export async function getAll() {
    return api.get(endpoints.all);
}

export async function create(data) {
    return api.post(endpoints.create, data);
}

export async function getDetails(id) {
    return api.get(endpoints.details(id));
}

export async function update(id, data) {
    return api.put(endpoints.update(id), data);
}

export async function del(id) {
    return api.del(endpoints.delete(id));
}

export async function getByUserId(id) {
    return api.get(endpoints.profile(id));
}

export async function addLike(data) {
    return api.post(endpoints.like, data);
}

export async function getAllLikes(id) {
    return api.get(endpoints.totalLikes(id));
}
