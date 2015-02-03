var React = require('react');
var WhereAreYouStore = require('../stores/WhereAreYouStore');
var Main = require('./Main.react');

function getWhereAreYouState() {
    return {
        timeToHit: WhereAreYouStore.timeToHit()
    };
}

var WhereAreYouApp = React.createClass({

    getInitialState: function () {
        return getWhereAreYouState();
    },

    componentDidMount: function () {
        WhereAreYouStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        WhereAreYouStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <Main timeToHit={this.state.timeToHit} />
        );
    },

    _onChange: function () {
        this.setState(getWhereAreYouState());
    }

});

module.exports = WhereAreYouApp;
