var React = require('react');

var ChildTwo = React.createClass({
  render: function() {
    return (
      <div>
          <h2>Hello from ChildTwo Component {this.props.pData} {this.props.defaultPropsData}  </h2>
          <h3>{this.props.sData} </h3>
      </div>
    );
  }
});

module.exports = ChildTwo;
