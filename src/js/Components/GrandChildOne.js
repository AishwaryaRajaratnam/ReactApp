var React = require('react');

var GrandChildOne = React.createClass({
  handleClick : function()
  {
    this.props.gpStateUpdate('New State');
  },
  render: function() {
    return (
      <div>
          <button onClick={this.handleClick}>Click Grandchild</button>
      </div>
    );
  }
});

module.exports = GrandChildOne;
