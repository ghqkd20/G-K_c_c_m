var proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware('/problems',{
            target: 'http://localhost:5000/'
        })
    );
     app.use(
         proxy.createProxyMiddleware('/mentorings', {
             target: 'http://localhost:5000/'
         })
     );
     app.use(
        proxy.createProxyMiddleware('/testcases', {
            target: 'http://localhost:5000/'
        })
    );
    app.use(
        proxy.createProxyMiddleware('/run', {
            target: 'http://localhost:3000/'
        })
    );
};