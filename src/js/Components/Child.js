var React = require('react');
var GrandChildOne = require('./GrandChildOne');

var Child = React.createClass({

  render: function() {
    return (
      <div>
          <h4>Click ChildOne</h4>
          <GrandChildOne gpStateUpdate={this.props.pStateUpdate}/>
      </div>
    );
  }
});

module.exports = Child;
