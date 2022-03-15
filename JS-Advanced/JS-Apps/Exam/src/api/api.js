import { clearUserData, getUserData, setUserData } from "../util.js";

const host = 'http://localhost:3030';

export async function request(url, options) {

    try {
        let response = await fetch(host + url, options);

        if (response.ok != true) {
            if (response.status == 403) {
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if (userData != null) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

async function get(url) {
    return request(url, createOptions());
}

async function post(url, data) {
    return request(url, createOptions('post', data));
}

async function put(url, data) {
    return request(url, createOptions('put', data));
}

async function del(url) {
    return request(url, createOptions('delete'))
}

async function login(email, password) {
    const response = await request('/users/login', createOptions('post', { email, password }));
    const userData = {
        email: response.email,
        id: response._id,
        token: response.accessToken
    };

    setUserData(userData);
    return response;
}

async function register(email, password) {
    const response = await request('/users/register', createOptions('post', { email, password }));
    const userData = {
        email: response.email,
        id: response._id,
        token: response.accessToken
    };

    setUserData(userData);
    return response;
}

async function logout() {
    await request('/users/logout', createOptions());
    clearUserData();
}



export {
    get,
    post,
    put,
    del,
    login,
    register,
    logout
};
