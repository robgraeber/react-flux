var Util2 = require2('utils/Util2');

var Store = module.exports = Util2.createStore({
    storeName: 'ApiStore',
    storage: {
        foodEvents: null
    },
    handlers: {
        'FoodEventConstants.RECIEVE_DATA': function(foodEvents) {
            this.storage.foodEvents = foodEvents;
            this.emitChange();
        }
    },
    getFoodEvents: function() {
        return this.storage.foodEvents;
    }
});
