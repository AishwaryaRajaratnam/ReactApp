var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Components/Child');
var ChildTwo = require('./Components/ChildTwo');
var ChildThree = require('./Components/ChildThree');

var Main = React.createClass({

  getDefaultProps:function()
    {
      return {propsData:'I am props data'};
    },
  getInitialState : function(){
    return {
      pStateData:'This is state data'
    };
  },
  updateParentState : function(st)
  {
    this.setState({pStateData:st});
  }
,
  render: function() {
    return (
      <div>
      <h1>Parent</h1>
           <Child pStateUpdate={this.updateParentState} />
           <ChildTwo pData='Helloooo123'  defaultPropsData={this.props.propsData} sData={this.state.pStateData}/>
           <ChildThree pd='Hello from Parent'>Hello Aishu <button>Click Child</button></ChildThree>
      </div>
    );
  }
});
ReactDOM.render(<Main />, document.getElementById('app'));
