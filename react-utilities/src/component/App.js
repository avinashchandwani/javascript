import React from "react";
import "./app.css";
import RadioGroup from './RadioGroup'
var createReactClass = require('create-react-class');
var $r = React.createElement;

var radioButtonList = [
  {
    "name":"1",
    "value":"Delimited",
    "label" :"Delimited"
    },
    {
      "name":"2",
      "value":"Fixed Width",
      "label" :"Fixed Width"
    },
    {
      "name":"3",
      "value":"Avro",
      "label" :"Avro"
    }
];

var App = createReactClass({


  getInitialState: function(){
      return {checkedRadio: "Delimited"};
  },

  onRadioButtonClick: function(selectedRadioButton) {
     console.log('Radio button was clicked:'+selectedRadioButton);
     this.setState({checkedRadio:selectedRadioButton});
  },

  render:function() {  
      return $r("div",{},
        $r(RadioGroup , {name :"DelimitedFixedWidth", radioButtonList : radioButtonList, radioButtonClick: this.onRadioButtonClick, checkedRadio : this.state.checkedRadio})
      );
  }
});

export default App;