var request = require('superagent-promise'),
    API_URL = require2('Constants').API_URL,
    Dispatcher = require2('Dispatcher');

var Actions = module.exports = {
    refreshFoodEvents: function(address) {
        request.get(API_URL).query({address: address}).end()
        .then(function (res){
            Dispatcher.dispatch("FoodEventConstants.RECIEVE_DATA", res.body.results);
        });
    }
};