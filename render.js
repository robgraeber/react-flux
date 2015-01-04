var nodeJsx = require('node-jsx').install({extension: '.jsx', addDocblock: true}),
    fs = require('fs'),
    url = require('url'),
    React = require('react'),
    Router = require('react-router'),
    routes = require('./app/Router');
    
var openingTag = '<body>',
    closingTag = '</body>',
    indexHtml = fs.readFileSync(__dirname+'/public/index.html').toString('utf8'),
    indexTop = indexHtml.substring(0, indexHtml.indexOf(openingTag)+openingTag.length),
    indexBottom = indexHtml.substring(indexHtml.indexOf(closingTag));

//production mode only -- renders the app to html to decrease load time
var renderApp = function (req, res, next) {
    if(process.env.NODE_ENV === 'production'){
        var urlPath = url.parse(req.url).pathname;

        Router.run(routes, urlPath, function (Handler, state){
            var component = Handler({params: state.params}),
                body = React.renderToString(component);

            res.send(indexTop + body + indexBottom);
        });
    } else {
        res.send(indexHtml);
    }
    
};
module.exports = renderApp;