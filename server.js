var cluster = require('cluster');

if (cluster.isMaster) {
    var cpuCount = require('os').cpus().length;

    if (process.env.NODE_ENV === 'production')
        console.log('Running in production mode!');
    else 
        console.log('Running in development mode!'),
        cpuCount = 1;
    
    for (var i = 0; i < cpuCount; i++)
        cluster.fork();

    cluster.on('exit', function (worker) {
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();
    });
} else {
    var path = require('path'),
        render = require('./render'),
        express = require('express'),
        compress  = require('compression');

    console.log('Worker ' + cluster.worker.id + ' running!');
    
    var app = express();

    app.use(compress());
    app.get('/', render);
    app.use(express.static(path.join(__dirname, './public')));
    
    app.get('*', render);

    app.set('port', process.env.PORT || 8000);
    app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
}