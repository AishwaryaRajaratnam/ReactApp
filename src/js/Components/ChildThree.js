var React = require('react');

var ChildThree = React.createClass({
  render: function() {
    return (
      <div>
          <h2>{this.props.pd} {this.props.children}  </h2>

      </div>
    );
  }
});

module.exports = ChildThree;
