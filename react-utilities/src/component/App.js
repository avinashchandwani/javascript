import React from "react";
import "./app.css";
import RadioGroup from './RadioGroup'
var createReactClass = require('create-react-class');
var $r = React.createElement;

var radioButtonList = [
  {
    "name":"1",
    "value":"Banana",
    "label" :"Banana"
    },
    {
      "name":"2",
      "value":"Apple",
      "label" :"Apple"
    },
    {
      "name":"3",
      "value":"Kiwi",
      "label" :"Kiwi"
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
