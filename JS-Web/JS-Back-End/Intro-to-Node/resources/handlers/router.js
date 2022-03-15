const routes = {};

function main(req, res) {

    const url = new URL(req.url, `http://${req.headers.host}`);

    let handler;
    const actions = routes[url.pathname];
    if (actions) {
        handler = actions[req.method];
    }
    if (typeof handler == 'function') {
        handler(req, res);
    } else {
        res.writeHead(404);
        res.write('Not Found');
        res.end();
    }
}

function register(method, pathname, handler) {

    if (routes[pathname] == undefined) {
        routes[pathname] = {};
    }

    routes[pathname][method] = handler;
}

function get(pathname, handler) {
    register('GET', pathname, handler);
}

function post(pathname, handler) {
    register('POST', pathname, handler);
}

module.exports = {
    main,
    get,
    post
}