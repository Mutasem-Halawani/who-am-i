const useragent = require('express-useragent');

const headerParser = (req) => {
    let ip = req.headers['x-forwarded-for'] ||
             req.connection.remoteAddress ||
             req.socket.remoteAddress ||
             req.connection.socket.remoteAddress;
    let lang = req.headers['accept-language'].split(',')[0];
    let os = useragent.parse(req.headers['user-agent']).os;

    let user = {
        'ip-address': ip,
        'language': lang,
        'OS': os
    };

    return user;
};

module.exports = headerParser;