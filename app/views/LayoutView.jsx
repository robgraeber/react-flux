var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

var Component = module.exports = React.createClass({
    render: function() {   
        return (
            <div id="container">
                <h1>React Boilerplate!</h1>
                <Link to="homeView">Home</Link>
                <Link to="aboutView" params={{id: 2}}>About</Link>
                <RouteHandler params={this.props.params} />
            </div>
        );
    }
});