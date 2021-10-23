function requestValidator(obj) {
    let validProps = ['method', 'uri', 'version', 'message'];
    for (const prop of validProps) {
        if (!obj.hasOwnProperty(prop)) {
            throw Error(`Invalid request header: Invalid ${prop != 'uri' ? prop[0].toUpperCase() + prop.slice(1, prop.length) : 'URI'}`);
        }
    }
    switch (obj.method) {
        case 'GET':
        case 'POST':
        case 'DELETE':
        case 'CONNECT':
            break;
        default:
            throw Error('Invalid request header: Invalid Method');
    }

    let uri = obj.uri;
    let uriPattern = /\.*[a-z0-9]+\.*[a-z0-9]*\.*[a-z0-9]*/gmi;
    let isValid = uriPattern.test(uri);

    if (isValid == false) {
        throw Error('Invalid request header: Invalid Uri');
    }

    switch (obj.version) {
        case 'HTTP/0.9':
        case 'HTTP/1.0':
        case 'HTTP/1.1':
        case 'HTTP/2.0':
            break;
        default:
            throw Error('Invalid request header: Invalid Version');
    }

    let msgPattern = /[\\<>&'"]/g;

    if (msgPattern.test(obj.message)) {
        throw Error('Invalid request header: Invalid Message')
    }
    return obj;

}

console.log(requestValidator({

    method: 'POST',

    version: 'HTTP/2.0',

    message: 'rm -rf /*'

}));


