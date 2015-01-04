var React = require('react'),
    ApiStore = require2('stores/ApiStore'),
    StoreMixin = require2('mixins/StoreMixin'),
    ApiActions = require2('actions/ApiActions');

var Component = module.exports = React.createClass({
    mixins: [StoreMixin],
    statics: {
        storeListeners: [ApiStore],
    },
    getInitialState: function() {
        return {
            foodEvents: ApiStore.getFoodEvents() || []
        };
    },
    componentDidMount: function() {
        if (!ApiStore.getFoodEvents())
            ApiActions.refreshFoodEvents("SF");
    },
    _onChange: function() {
        this.setState({
            foodEvents: ApiStore.getFoodEvents() || []
        });
    },
    render: function() {  
        return (
            <div>
                <h3>HOME</h3>
                <div>This is the home view</div>
                <div>This is the count: {this.state.foodEvents.length}</div>
            </div>
        );
    }
});